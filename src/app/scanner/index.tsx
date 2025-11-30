import { CameraView } from 'expo-camera';
import { Redirect, Stack } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { AppState, Platform, StatusBar, StyleSheet } from 'react-native';
import { useAuthStore } from 'src/lib';

import { View } from '@/components/ui';

import { BARCODE_TYPE, QRCODE_TYPE } from './types';
export default function Home() {
  const userRole = useAuthStore.use.user()?.role;
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
            if (type === BARCODE_TYPE && userRole === 'CLIENT') {
              qrLock.current = true;
              setProductId((oldValue) => {
                if (oldValue !== data) return data;
                return oldValue;
              });
            } else if (type === QRCODE_TYPE && userRole === 'CASHIER') {
              // Validate QR code data before proceeding
              if (
                typeof data === 'string' &&
                data.startsWith('PAYMENT_BASKET:')
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
