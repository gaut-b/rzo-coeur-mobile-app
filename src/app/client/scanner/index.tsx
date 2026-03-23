import { CameraView } from 'expo-camera';
import { Redirect, Stack } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { AppState, Platform, StyleSheet } from 'react-native';
import { SystemBars } from 'react-native-edge-to-edge';

import { ScannerViewfinder, View } from '@/components/ui';
import { useRoleProtectedRoute } from '@/lib/hooks';
import { translate } from '@/lib/i18n';
import { BARCODE_TYPE } from '@/lib/types';

export default function ClientScannerPage() {
  useRoleProtectedRoute(['CLIENT']);

  const qrLock = useRef(false);
  const appState = useRef(AppState.currentState);
  const [productId, setProductId] = useState<string | null>(null);

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

  return (
    <View style={StyleSheet.absoluteFillObject}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      {Platform.OS === 'android' ? <SystemBars hidden /> : null}
      <CameraView
        style={StyleSheet.absoluteFillObject}
        facing="back"
        onBarcodeScanned={({ type, data }) => {
          if (data && !qrLock.current && type === BARCODE_TYPE) {
            qrLock.current = true;
            setProductId((oldValue) => {
              if (oldValue !== data) return data;
              return oldValue;
            });
          }
        }}
      />

      <ScannerViewfinder
        instruction={translate('pages.scanner.product-instructions')}
      />
    </View>
  );
}
