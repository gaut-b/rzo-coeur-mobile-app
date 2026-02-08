import { useRouter } from 'expo-router';
import React from 'react';

import { Button, Text, View } from '@/components/ui';
import { type Shop } from '@/lib/hooks';
import { translate } from '@/lib/i18n';
import { CLIENT_ROOT_PATH } from '@/lib/types';
import { calculateDistance, formatDistance } from '@/lib/utils';

type ShopCardProps = {
  shop: Shop;
  userLatitude?: number;
  userLongitude?: number;
};

export const ShopCard: React.FC<ShopCardProps> = ({
  shop,
  userLatitude,
  userLongitude,
}) => {
  const router = useRouter();

  const distance =
    userLatitude !== undefined && userLongitude !== undefined
      ? calculateDistance({
          point1: { latitude: userLatitude, longitude: userLongitude },
          point2: { latitude: shop.latitude, longitude: shop.longitude },
        })
      : null;

  return (
    <View className="mb-3 rounded-lg border border-neutral-200 bg-white p-4 shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
      {/* Header with shop name */}
      <View className="mb-3 flex-row items-center justify-between">
        <Text className="flex-1 text-base font-semibold text-neutral-900 dark:text-neutral-100">
          {shop.name}
        </Text>
        {distance !== null && (
          <View className="rounded-full bg-info-100 px-3 py-1 dark:bg-info-900">
            <Text className="text-xs font-medium text-info-700 dark:text-info-300">
              {formatDistance(distance)}
            </Text>
          </View>
        )}
      </View>

      {/* Address */}
      <View className="mb-3">
        <Text className="text-sm text-neutral-600 dark:text-neutral-400">
          {shop.full_address}
        </Text>
      </View>

      {/* View details button */}
      <Button
        variant="default"
        className="w-full"
        onPress={() => router.push(`/${CLIENT_ROOT_PATH}/stores/${shop.id}`)}
      >
        <Text className="font-semibold text-white">
          {translate('pages.shops.view-on-map')}
        </Text>
      </Button>
    </View>
  );
};
