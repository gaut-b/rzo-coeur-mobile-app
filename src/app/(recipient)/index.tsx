import React from 'react';

import { RecipientCartCard } from '@/components/articles/RecipientCartCard';
import {
  FocusAwareStatusBar,
  Loader,
  ScrollView,
  showError,
  Text,
  View,
} from '@/components/ui';
import { useGetRecipientCarts } from '@/lib/hooks';
import { translate } from '@/lib/i18n';
import { useAuthStore } from '@/lib/state';

export default function RecipientBaskets() {
  const firstName = useAuthStore((state) => state.user?.firstName);
  const {
    data: cartListResponse,
    isLoading,
    isError,
    error,
  } = useGetRecipientCarts();

  React.useEffect(() => {
    if (isError) {
      showError(error);
    }
  }, [isError, error]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <View className="flex-1 items-center justify-center px-4">
        <FocusAwareStatusBar />
        <Text className="text-center text-lg text-neutral-600 dark:text-neutral-400">
          {translate('errors.generic.unknown')}
        </Text>
      </View>
    );
  }

  const carts = cartListResponse?.results || [];

  return (
    <View className="flex-1">
      <FocusAwareStatusBar />
      {carts.length === 0 ? (
        <View className="flex-1 items-center justify-center gap-4 p-4">
          <Text className="text-center text-3xl tracking-tight">
            {translate('pages.basket.greeting', {
              firstName,
            })}
          </Text>
          <Text className="text-center text-lg tracking-tight text-neutral-600 dark:text-neutral-400">
            {translate('pages.recipient.empty-baskets')}
          </Text>
        </View>
      ) : (
        <ScrollView className="flex-1 bg-neutral-50 dark:bg-neutral-900">
          <View className="p-4">
            <Text className="mb-4 text-2xl font-bold tracking-tight">
              {translate('pages.basket.greeting', {
                firstName,
              })}
            </Text>
            {carts.map((cart) => (
              <RecipientCartCard key={cart.id} cart={cart} />
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
}
