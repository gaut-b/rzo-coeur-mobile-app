// Import  global CSS file
import '../../global.css';

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React from 'react';
import { Platform, StatusBar, StyleSheet } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { KeyboardProvider } from 'react-native-keyboard-controller';

import { Button, Text, View } from '@/components/ui';
import { useThemeConfig } from '@/lib/hooks';
import { APIProvider } from '@/lib/http';
import { translate } from '@/lib/i18n';
export const unstable_settings = {
  initialRouteName: 'index',
};

SplashScreen.preventAutoHideAsync();
// Set the animation options. This is optional.
SplashScreen.setOptions({
  duration: 500,
  fade: true,
});

export default function RootLayout() {
  return (
    <Providers>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(client)" options={{ headerShown: false }} />
        <Stack.Screen name="(recipient)" options={{ headerShown: false }} />
        <Stack.Screen name="(cashier)" options={{ headerShown: false }} />
        <Stack.Screen name="onboarding" options={{ headerShown: false }} />
        <Stack.Screen name="sign-in" options={{ headerShown: false }} />
        <Stack.Screen name="sign-up" options={{ headerShown: false }} />
        <Stack.Screen name="reset-password" options={{ headerShown: false }} />
        <Stack.Screen name="recipient" options={{ headerShown: false }} />
        <Stack.Screen name="client" options={{ headerShown: false }} />
        <Stack.Screen name="cashier" options={{ headerShown: false }} />
        <Stack.Screen name="products" options={{ headerShown: false }} />
      </Stack>
    </Providers>
  );
}

export function ErrorBoundary({
  error,
  retry,
}: {
  readonly error: Error;
  readonly retry: () => Promise<void>;
}) {
  return (
    <View className="flex-1 items-center justify-center gap-4 px-6">
      <Text className="text-center text-2xl font-bold">
        {translate('errors.boundary.title' as never)}
      </Text>
      <Text className="text-center text-base text-neutral-600 dark:text-neutral-400">
        {translate('errors.boundary.description' as never)}
      </Text>
      {__DEV__ && error?.message ? (
        <Text className="text-center text-sm text-neutral-500 dark:text-neutral-400">
          {error.message}
        </Text>
      ) : null}
      <Button
        variant="secondary"
        onPress={() => {
          void retry();
        }}
      >
        <Text className="font-bold text-white">
          {translate('errors.boundary.retry' as never)}
        </Text>
      </Button>
    </View>
  );
}

function Providers({ children }: { readonly children: React.ReactNode }) {
  const theme = useThemeConfig();
  const statusBarHeight =
    Platform.OS === 'android' ? (StatusBar.currentHeight ?? 0) : 0;

  return (
    <GestureHandlerRootView
      style={styles.container}
      className={theme.dark ? `dark` : undefined}
    >
      <KeyboardProvider>
        <APIProvider>
          <ThemeProvider value={theme}>
            <BottomSheetModalProvider>
              {children}
              <FlashMessage
                position="top"
                floating
                statusBarHeight={statusBarHeight}
              />
            </BottomSheetModalProvider>
          </ThemeProvider>
        </APIProvider>
      </KeyboardProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
