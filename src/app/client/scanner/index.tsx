import { CameraView } from 'expo-camera';
import { Redirect, Stack } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { AppState, Platform, StyleSheet } from 'react-native';
import { SystemBars } from 'react-native-edge-to-edge';

import { Text, View } from '@/components/ui';
import { useRoleProtectedRoute } from '@/lib/hooks';
import { translate } from '@/lib/i18n';
import { BARCODE_TYPE } from '@/lib/types';

const VIEWFINDER_SIZE = 260;
const BRACKET_SIZE = 28;
const BRACKET_WIDTH = 3;

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

      {/* Viewfinder overlay */}
      <View style={StyleSheet.absoluteFillObject} pointerEvents="none">
        {/* Top */}
        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.6)' }} />

        {/* Middle row */}
        <View style={{ flexDirection: 'row', height: VIEWFINDER_SIZE }}>
          <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.6)' }} />

          {/* Transparent viewfinder window */}
          <View style={{ width: VIEWFINDER_SIZE }}>
            {/* Top-left bracket */}
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: BRACKET_SIZE,
                height: BRACKET_SIZE,
                borderTopWidth: BRACKET_WIDTH,
                borderLeftWidth: BRACKET_WIDTH,
                borderColor: 'white',
              }}
            />
            {/* Top-right bracket */}
            <View
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: BRACKET_SIZE,
                height: BRACKET_SIZE,
                borderTopWidth: BRACKET_WIDTH,
                borderRightWidth: BRACKET_WIDTH,
                borderColor: 'white',
              }}
            />
            {/* Bottom-left bracket */}
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: BRACKET_SIZE,
                height: BRACKET_SIZE,
                borderBottomWidth: BRACKET_WIDTH,
                borderLeftWidth: BRACKET_WIDTH,
                borderColor: 'white',
              }}
            />
            {/* Bottom-right bracket */}
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: BRACKET_SIZE,
                height: BRACKET_SIZE,
                borderBottomWidth: BRACKET_WIDTH,
                borderRightWidth: BRACKET_WIDTH,
                borderColor: 'white',
              }}
            />
          </View>

          <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.6)' }} />
        </View>

        {/* Bottom with instructions */}
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.6)',
            alignItems: 'center',
            paddingTop: 32,
            paddingHorizontal: 40,
          }}
        >
          <Text className="text-center text-base text-white">
            {translate('pages.scanner.product-instructions')}
          </Text>
        </View>
      </View>
    </View>
  );
}
