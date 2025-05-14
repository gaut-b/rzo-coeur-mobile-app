import { CameraView } from 'expo-camera';
import { Redirect, Stack } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { AppState, Platform, StatusBar, StyleSheet } from 'react-native';

import { View } from '@/components/ui';
export default function Home() {
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
          title: 'Overview',
          headerShown: false,
        }}
      />
      {Platform.OS === 'android' ? <StatusBar hidden /> : null}
      <CameraView
        style={StyleSheet.absoluteFillObject}
        facing="back"
        onBarcodeScanned={({ data }) => {
          if (data && !qrLock.current) {
            qrLock.current = true;
            setProductId((oldValue) => {
              if (oldValue !== data) return data;
              return oldValue;
            });
          }
        }}
      />
      {/* <Overlay /> */}
    </View>
  );
}
