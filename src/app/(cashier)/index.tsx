import { useCameraPermissions } from 'expo-camera';
import { useRouter } from 'expo-router';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button, FocusAwareStatusBar, Text, View } from '@/components/ui';
import BarcodeIcon from '@/components/ui/icons/barcode-icon';
import { translate } from '@/lib/i18n';
import { CASHIER_ROOT_PATH } from '@/lib/types';

export default function CashierScanner() {
  const [permission, requestPermission] = useCameraPermissions();
  const isPermissionGranted = Boolean(permission?.granted);
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1">
      <FocusAwareStatusBar />
      <View className="flex-1 items-center justify-center px-4">
        <Text className="text-center text-2xl font-bold tracking-tight">
          {translate('pages.payment.cashier.content')}
        </Text>
      </View>
      <View
        className="border-t border-neutral-200 px-4 pt-3 dark:border-neutral-700"
        style={{ paddingBottom: Math.max(insets.bottom, 8) }}
      >
        <Button
          variant="secondary"
          size="lg"
          className="h-16 rounded-2xl bg-success-600"
          onPress={() => {
            if (isPermissionGranted) {
              router.navigate(`/${CASHIER_ROOT_PATH}/scanner`);
            } else {
              requestPermission();
            }
          }}
        >
          <View className="w-full flex-row items-center justify-evenly">
            <BarcodeIcon fill="white" />
            <Text className="font-bold text-white">
              {translate('pages.basket.scan-qr')}
            </Text>
          </View>
        </Button>
      </View>
    </View>
  );
}
