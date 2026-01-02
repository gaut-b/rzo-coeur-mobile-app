import { CameraView } from 'expo-camera';
import { Redirect, Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { Alert, AppState, Platform, StatusBar, StyleSheet } from 'react-native';
import { useAuthStore } from 'src/lib';

import { View } from '@/components/ui';
import { QR_FORMAT_PAYMENT_BASKET } from '@/lib/constants';
import { translate } from '@/lib/i18n';
import { useRecipientCartStore } from '@/lib/state';

import { BARCODE_TYPE, QRCODE_TYPE } from './types';

export default function Home() {
  const userRole = useAuthStore.use.user()?.role;
  const scanArticle = useRecipientCartStore.use.scanArticle();
  const router = useRouter();
  const params = useLocalSearchParams<{
    mode?: string;
    cartId?: string;
    articleId?: string;
    expectedBarcode?: string;
  }>();

  const qrLock = useRef(false);
  const appState = useRef(AppState.currentState);
  const [productId, setProductId] = useState<string | null>(null);
  const [isPaymentBasket, setIsPaymentBasket] = useState<boolean>(false);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        qrLock.current = false;
      }
      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, []);

  if (productId) {
    return <Redirect href={`/products/${productId}`} />;
  }

  if (isPaymentBasket) {
    return <Redirect href={`/payment/list`} />;
  }

  return (
    <View style={StyleSheet.absoluteFillObject}>
      <Stack.Screen
        options={{
          title: 'Overview',
          headerShown: false,
        }}
      />
      {Platform.OS === 'android' ? <StatusBar hidden /> : null}
      <CameraView
        style={StyleSheet.absoluteFillObject}
        facing="back"
        onBarcodeScanned={({ type, data }) => {
          if (data && !qrLock.current) {
            // RECIPIENT mode: verify barcode matches expected article
            if (params.mode === 'recipient' && type === BARCODE_TYPE) {
              qrLock.current = true;
              const scannedBarcode = data;
              const expectedBarcode = params.expectedBarcode;

              if (scannedBarcode === expectedBarcode) {
                // Success - add to scanned articles and navigate back
                const articleId = params.articleId;
                if (typeof articleId === 'string') {
                  const parsedArticleId = Number(articleId);
                  if (!Number.isNaN(parsedArticleId)) {
                    scanArticle(parsedArticleId);
                  }
                }
                router.back();
              } else {
                // Mismatch - show error and allow retry
                Alert.alert(
                  translate('pages.scanner.barcode-mismatch-title'),
                  translate('pages.scanner.barcode-mismatch-message', {
                    scannedBarcode,
                    expectedBarcode,
                  }),
                  [
                    {
                      text: translate('pages.scanner.retry'),
                      onPress: () => {
                        qrLock.current = false;
                      },
                    },
                    {
                      text: translate('pages.scanner.cancel'),
                      style: 'cancel',
                      onPress: () => {
                        router.back();
                      },
                    },
                  ]
                );
              }
            }
            // CLIENT mode: scan product barcodes
            else if (
              type === BARCODE_TYPE &&
              userRole === 'CLIENT' &&
              !params.mode
            ) {
              qrLock.current = true;
              setProductId((oldValue) => {
                if (oldValue !== data) return data;
                return oldValue;
              });
            }
            // CASHIER mode: scan QR codes
            else if (
              type === QRCODE_TYPE &&
              userRole === 'CASHIER' &&
              !params.mode
            ) {
              // Validate QR code data before proceeding
              if (
                typeof data === 'string' &&
                data.startsWith(QR_FORMAT_PAYMENT_BASKET)
              ) {
                qrLock.current = true;
                setIsPaymentBasket(true);
              } else {
                // Optionally, show an error or ignore invalid QR codes
                // e.g., Alert.alert('Invalid QR code');
              }
            }
          }
        }}
      />
      {/* <Overlay /> */}
    </View>
  );
}
