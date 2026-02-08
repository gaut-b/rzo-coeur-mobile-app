import { useRouter } from 'expo-router';
import React from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import { Button, FocusAwareStatusBar, Text, View } from '@/components/ui';
import { useGetShop } from '@/lib/hooks';
import { translate } from '@/lib/i18n';

type ShopDetailProps = {
  shopId: number;
};

export const ShopDetail: React.FC<ShopDetailProps> = ({ shopId }) => {
  const router = useRouter();
  const { data: shop, isLoading, isError } = useGetShop(shopId);

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <FocusAwareStatusBar />
        <ActivityIndicator size="large" />
        <Text className="mt-4 text-neutral-600 dark:text-neutral-400">
          {translate('common.loading')}
        </Text>
      </View>
    );
  }

  if (isError || !shop) {
    return (
      <View className="flex-1 justify-center px-4">
        <FocusAwareStatusBar />
        <View className="items-center gap-4 rounded-xl bg-white p-6 dark:bg-neutral-800">
          <Text className="text-center text-lg text-error-600 dark:text-error-400">
            {translate('pages.shops.error')}
          </Text>
          <Button
            variant="default"
            className="w-full"
            onPress={() => router.back()}
          >
            <Text className="font-semibold text-white">Retour</Text>
          </Button>
        </View>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1">
      <FocusAwareStatusBar />

      {/* Shop Information */}
      <View className="bg-white p-6 dark:bg-neutral-800">
        <Text className="mb-4 text-2xl font-bold text-neutral-900 dark:text-neutral-100">
          {shop.name}
        </Text>

        <View className="mb-2">
          <Text className="mb-1 text-sm font-semibold text-neutral-700 dark:text-neutral-300">
            {translate('pages.shops.address')}
          </Text>
          <Text className="text-base text-neutral-600 dark:text-neutral-400">
            {shop.full_address}
          </Text>
        </View>

        <View className="mb-2">
          <Text className="mb-1 text-sm font-semibold text-neutral-700 dark:text-neutral-300">
            {translate('pages.shops.city')}
          </Text>
          <Text className="text-base text-neutral-600 dark:text-neutral-400">
            {shop.city} {shop.postal_code}
          </Text>
        </View>
      </View>

      {/* Map */}
      <View className="h-96 mx-4">
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{ width: '100%', height: '100%' }}
          initialRegion={{
            latitude: shop.latitude,
            longitude: shop.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker
            coordinate={{
              latitude: shop.latitude,
              longitude: shop.longitude,
            }}
            title={shop.name}
            description={shop.full_address}
          />
        </MapView>
      </View>

      {/* Additional spacing at bottom */}
      <View className="h-8" />
    </ScrollView>
  );
};
