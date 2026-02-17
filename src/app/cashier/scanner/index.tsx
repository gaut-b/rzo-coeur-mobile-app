import { CameraView } from 'expo-camera';
import { Redirect, Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { Alert, AppState, Platform, StatusBar, StyleSheet } from 'react-native';

import { showErrorMessage, View } from '@/components/ui';
import { useRoleProtectedRoute } from '@/lib/hooks';
import { translate } from '@/lib/i18n';
import { useAuthStore, useCashierStore } from '@/lib/state';
import {
  type BasketQRCodeType,
  ClientBasketQRCodeSchema,
  QRCODE_TYPE,
  RecipientBasketQRCodeSchema,
} from '@/lib/types';

export default function CashierScannerPage() {
  useRoleProtectedRoute(['CASHIER']);
  const router = useRouter();
  const params = useLocalSearchParams<{
    mode?: string;
    expectedBarcode?: string;
    expectedArticleName?: string;
  }>();

  const userRole = useAuthStore.use.user()?.role;
  const setClientId = useCashierStore.use.setClientId();
  const setClientData = useCashierStore.use.setClientData();
  const setRecipientData = useCashierStore.use.setRecipientData();
  const clearScannedArticles = useCashierStore.use.clearScannedArticles();
  const scanArticle = useCashierStore.use.scanArticle();

  const isArticleScanMode =
    params.mode === 'article' && typeof params.expectedBarcode === 'string';

  const qrLock = useRef(false);
  const appState = useRef(AppState.currentState);
  const [qrCodeData, setQrCodeData] = useState<BasketQRCodeType | null>(null);

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

  if (userRole !== 'CASHIER') {
    return <Redirect href="/" />;
  }

  if (qrCodeData && !isArticleScanMode) {
    return (
      <Redirect
        href={`/cashier/payment/${qrCodeData.type === 'CLIENT_BASKET' ? 'client' : 'recipient'}`}
      />
    );
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
        onBarcodeScanned={({ data, type }) => {
          if (!data || qrLock.current) {
            return;
          }

          if (isArticleScanMode) {
            qrLock.current = true;
            const scannedBarcode = data.trim();
            const expectedBarcode = params.expectedBarcode;

            if (scannedBarcode === expectedBarcode) {
              scanArticle(expectedBarcode);
              router.replace('/cashier/payment/recipient');
            } else {
              Alert.alert(
                translate('pages.scanner.barcode-mismatch-title'),
                translate('pages.scanner.barcode-mismatch-message', {
                  scannedBarcode,
                  expectedBarcode,
                  expectedArticleLabel: translate(
                    'pages.scanner.expected-article'
                  ),
                  expectedArticleName:
                    params.expectedArticleName || expectedBarcode,
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
                      router.replace('/cashier/payment/recipient');
                    },
                  },
                ]
              );
            }
            return;
          }

          if (type === QRCODE_TYPE) {
            try {
              const parsedData = JSON.parse(data);
              qrLock.current = true;
              const isRecipientQRCode =
                RecipientBasketQRCodeSchema.safeParse(parsedData);
              const isClientQRCode =
                ClientBasketQRCodeSchema.safeParse(parsedData);
              if (isRecipientQRCode.success) {
                clearScannedArticles();
                setClientId(isRecipientQRCode.data.clientId);
                setRecipientData(
                  isRecipientQRCode.data.clientId,
                  isRecipientQRCode.data.cartId
                );
                setQrCodeData(isRecipientQRCode.data);
              } else if (isClientQRCode.success) {
                clearScannedArticles();
                setClientData(
                  isClientQRCode.data.clientId,
                  isClientQRCode.data.articles
                );
                setQrCodeData(isClientQRCode.data);
              } else {
                useCashierStore.getState().clear();
                showErrorMessage();
                qrLock.current = true;
                router.replace('/');
              }
            } catch (error) {
              qrLock.current = false;
              console.error(error, 'Invalid QR code data');
              showErrorMessage();
              qrLock.current = true;
              router.replace('/');
            }
          }
        }}
      />
    </View>
  );
}
