import { CameraView } from 'expo-camera';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useRef } from 'react';
import { Alert, AppState, Platform, StatusBar, StyleSheet } from 'react-native';
import { useRoleProtectedRoute } from 'src/lib/hooks/routing';

import { View } from '@/components/ui';
import { translate } from '@/lib/i18n';
import { useRecipientCartStore } from '@/lib/state';
import { QRCODE_TYPE } from '@/lib/types';

export default function RecipientScannerPage() {
  useRoleProtectedRoute(['RECIPIENT']);
  const scanArticle = useRecipientCartStore.use.scanArticle();
  const router = useRouter();
  const params = useLocalSearchParams<{
    expectedArticleId: string;
    articleId: string;
  }>();

  const qrLock = useRef(false);
  const appState = useRef(AppState.currentState);

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
          if (data && !qrLock.current && type === QRCODE_TYPE) {
            qrLock.current = true;
            const scannedBarcode = data;
            const expectedBarcode = params.expectedArticleId;

            if (scannedBarcode === expectedBarcode) {
              // Success - add to scanned articles and navigate back
              const articleId = params.articleId;
              if (typeof articleId === 'string') {
                const parsedArticleId = Number(articleId);
                if (!Number.isNaN(parsedArticleId)) {
                  scanArticle(parsedArticleId);
                }
              }
              router.push('/');
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
                      router.push('/');
                    },
                  },
                ]
              );
            }
          }
        }}
      />
    </View>
  );
}
