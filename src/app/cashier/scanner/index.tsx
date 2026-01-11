import { CameraView } from 'expo-camera';
import { Redirect, Stack } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { AppState, Platform, StatusBar, StyleSheet } from 'react-native';

import { View } from '@/components/ui';
import { useRoleProtectedRoute } from '@/lib/hooks';
import { useAuthStore, useCashierStore } from '@/lib/state';
import {
  type BasketQRCodeType,
  ClientBasketQRCodeSchema,
  QRCODE_TYPE,
  RecipientBasketQRCodeSchema,
} from '@/lib/types';

export default function CashierScannerPage() {
  useRoleProtectedRoute(['CASHIER']);
  const userRole = useAuthStore.use.user()?.role;
  const setClientId = useCashierStore.use.setClientId();
  const setClientData = useCashierStore.use.setClientData();
  const setRecipientData = useCashierStore.use.setRecipientData();

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

  if (qrCodeData) {
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
          if (data && !qrLock.current && type === QRCODE_TYPE) {
            try {
              const parsedData = JSON.parse(data);
              qrLock.current = true;
              const isRecipientQRCode =
                RecipientBasketQRCodeSchema.safeParse(parsedData);
              const isClientQRCode =
                ClientBasketQRCodeSchema.safeParse(parsedData);
              if (isRecipientQRCode.success) {
                setClientId(isRecipientQRCode.data.clientId);
                setRecipientData(
                  isRecipientQRCode.data.clientId,
                  isRecipientQRCode.data.cartId
                );
                setQrCodeData(isRecipientQRCode.data);
              } else if (isClientQRCode.success) {
                setClientData(
                  isClientQRCode.data.clientId,
                  isClientQRCode.data.articles
                );
                setQrCodeData(isClientQRCode.data);
              } else {
                // TODO: HANDLE ERROR
                console.error('Invalid QR code data');
              }
            } catch (error) {
              // TODO: HANDLE ERROR
              console.error(error, 'Invalid QR code data');
            }
          }
        }}
      />
    </View>
  );
}
