import React from 'react';

import { Button, Text, View } from '@/components/ui';
import { CheckCircleIcon } from '@/components/ui/icons';
import { translate } from '@/lib/i18n';

interface ScanStatusIndicatorProps {
  isScanned: boolean;
  onPress: () => void;
  disabled?: boolean;
  scannedCount?: number;
  totalCount?: number;
}

export const ScanStatusIndicator = ({
  isScanned,
  onPress,
  disabled = false,
  scannedCount,
  totalCount,
}: ScanStatusIndicatorProps) => {
  const showProgress =
    scannedCount !== undefined && totalCount !== undefined && totalCount > 1;

  if (isScanned) {
    return (
      <View className="w-24 items-center justify-center text-success-500 dark:text-success-400">
        <CheckCircleIcon fill="currentColor" width={24} height={24} />
        <Text className="mt-1 text-center text-xs font-medium text-success-600 dark:text-success-400">
          {translate('cashier.scanned')}
          {showProgress && ` (${scannedCount}/${totalCount})`}
        </Text>
      </View>
    );
  }

  return (
    <View className="w-24 items-center justify-center">
      <Button
        label={translate('cashier.scan')}
        onPress={onPress}
        variant="outline"
        size="sm"
        disabled={disabled}
      />
      {showProgress && (
        <Text className="mt-1 text-center text-xs text-neutral-500 dark:text-neutral-400">
          {scannedCount}/{totalCount}
        </Text>
      )}
    </View>
  );
};
