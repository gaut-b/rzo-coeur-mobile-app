import React, { useEffect } from 'react';
import { FlatList, RefreshControl } from 'react-native';

import { ShopCard } from '@/components/shops/ShopCard';
import {
  ActivityIndicator,
  Button,
  FocusAwareStatusBar,
  Text,
  View,
} from '@/components/ui';
import { useGetShops, useLocation } from '@/lib/hooks';
import { translate } from '@/lib/i18n';

export default function StoresPage() {
  const {
    permission,
    location,
    isLoading: isLocationLoading,
    error: locationError,
    requestPermission,
    getCurrentLocation,
  } = useLocation();

  const {
    data,
    isLoading: isShopsLoading,
    isError,
    refetch,
  } = useGetShops({
    latitude: location?.latitude,
    longitude: location?.longitude,
    enabled: permission?.granted === true,
  });

  useEffect(() => {
    if (permission?.granted && !location) {
      getCurrentLocation();
    }
  }, [permission?.granted, location, getCurrentLocation]);

  const handleRefresh = async () => {
    if (permission?.granted) {
      await getCurrentLocation();
      refetch();
    }
  };

  // Permission not granted
  if (permission && !permission.granted) {
    return (
      <View className="flex-1 justify-center px-4">
        <FocusAwareStatusBar />
        <View className="items-center gap-4 rounded-xl bg-white p-6 dark:bg-neutral-800">
          <Text className="text-center text-lg text-neutral-900 dark:text-neutral-100">
            {translate('pages.shops.permission-denied')}
          </Text>
          {locationError && (
            <Text className="text-center text-sm text-error-600 dark:text-error-400">
              {locationError}
            </Text>
          )}
          <Button
            variant="default"
            className="w-full"
            onPress={requestPermission}
            disabled={isLocationLoading}
          >
            <Text className="font-semibold text-white">
              {translate('pages.shops.permission-request')}
            </Text>
          </Button>
        </View>
      </View>
    );
  }

  // Loading location
  if (isLocationLoading || (permission?.granted && !location)) {
    return (
      <View className="flex-1 items-center justify-center">
        <FocusAwareStatusBar />
        <ActivityIndicator size="large" />
        <Text className="mt-4 text-neutral-600 dark:text-neutral-400">
          {translate('pages.shops.loading')}
        </Text>
      </View>
    );
  }

  // Error loading shops
  if (isError) {
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
            onPress={() => refetch()}
          >
            <Text className="font-semibold text-white">
              {translate('pages.shops.retry')}
            </Text>
          </Button>
        </View>
      </View>
    );
  }

  // Loading shops
  if (isShopsLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <FocusAwareStatusBar />
        <ActivityIndicator size="large" />
        <Text className="mt-4 text-neutral-600 dark:text-neutral-400">
          {translate('pages.shops.loading')}
        </Text>
      </View>
    );
  }

  // Empty list
  if (!data || data.results.length === 0) {
    return (
      <View className="flex-1 items-center justify-center px-4">
        <FocusAwareStatusBar />
        <Text className="text-center text-lg text-neutral-600 dark:text-neutral-400">
          {translate('pages.shops.empty')}
        </Text>
      </View>
    );
  }

  // Shops list
  return (
    <View className="flex-1">
      <FocusAwareStatusBar />
      <FlatList
        data={data.results}
        renderItem={({ item }) => (
          <ShopCard
            shop={item}
            userLatitude={location?.latitude}
            userLongitude={location?.longitude}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ padding: 16 }}
        refreshControl={
          <RefreshControl
            refreshing={isShopsLoading}
            onRefresh={handleRefresh}
          />
        }
      />
    </View>
  );
}
