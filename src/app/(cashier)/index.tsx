import { useCameraPermissions } from 'expo-camera';
import { useRouter } from 'expo-router';
import React from 'react';

import { Button, FocusAwareStatusBar, Text, View } from '@/components/ui';
import BarcodeIcon from '@/components/ui/icons/barcode-icon';
import { translate } from '@/lib/i18n';
import { CASHIER_ROOT_PATH } from '@/lib/types';

export default function CashierScanner() {
  const [permission, requestPermission] = useCameraPermissions();
  const isPermissionGranted = Boolean(permission?.granted);
  const router = useRouter();

  return (
    <View className="relative flex-1 items-center justify-center">
      <FocusAwareStatusBar />
      <Text className="text-center text-3xl tracking-tight px-4">
        {translate('pages.payment.cashier.content')}
      </Text>

      <Button
        variant="secondary"
        size="icon"
        className="absolute bottom-10 h-16 w-2/3 rounded-2xl bg-success-600"
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
  );
}
