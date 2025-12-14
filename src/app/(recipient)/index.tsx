import { useCameraPermissions } from 'expo-camera';
import { useRouter } from 'expo-router';
import React from 'react';

import ArticleList from '@/components/basket/ArticleList';
import { Button, FocusAwareStatusBar, Text, View } from '@/components/ui';
import { CashierIcon } from '@/components/ui/icons/cashier-icon';
import { translate } from '@/lib/i18n';
import { useAuthStore, useBasketStore } from '@/lib/state';

export default function RecipientBaskets() {
  const [permission, requestPermission] = useCameraPermissions();
  const isPermissionGranted = Boolean(permission?.granted);
  const router = useRouter();
  const { articles: articlesById } = useBasketStore();
  const firstName = useAuthStore((state) => state.user?.firstName);

  return (
    <View className="relative flex-1">
      <FocusAwareStatusBar />
      {articlesById.size === 0 ? (
        <View className="flex-1 justify-center items-center m-4 gap-4">
          <Text className="text-center text-3xl tracking-tight">
            {translate('pages.basket.greeting', {
              firstName,
            })}
          </Text>
          <Text className="text-center text-lg tracking-tight">
            {translate('pages.recipient.empty-baskets')}
          </Text>
        </View>
      ) : (
        <ArticleList articleByIds={articlesById} />
      )}

      {articlesById.size !== 0 && (
        <Button
          variant="secondary"
          size="icon"
          className="absolute bottom-10 h-16 w-2/3 self-center rounded-2xl bg-success-600"
          onPress={() => {
            if (isPermissionGranted) {
              router.navigate('/payment');
            } else {
              requestPermission();
            }
          }}
        >
          <View className="w-full flex-row items-center justify-evenly">
            <CashierIcon fill="white" width={40} height={40} />
            <Text className="ml-2 flex-1 text-center font-bold text-white">
              {translate('pages.basket.pickup-basket')}
            </Text>
          </View>
        </Button>
      )}
    </View>
  );
}
