import { useRouter } from 'expo-router';
import React from 'react';

import { Button, Pressable, Text, View } from '@/components/ui';
import { MapPin } from '@/components/ui/icons';
import { type CartResponse } from '@/lib/hooks';
import { translate } from '@/lib/i18n';
import { RECIPIENT_ROOT_PATH } from '@/lib/types';

type CartCardProps = {
  cart: CartResponse;
};

const statusColors = {
  ASSIGNED: 'bg-warning-100 dark:bg-warning-900',
  COLLECTED: 'bg-success-100 dark:bg-success-900',
  PENDING: 'bg-info-100 dark:bg-info-900',
};

const statusTextColors = {
  ASSIGNED: 'text-warning-700 dark:text-warning-300',
  COLLECTED: 'text-success-700 dark:text-success-300',
  PENDING: 'text-info-700 dark:text-info-300',
};

export const RecipientCartCard: React.FC<CartCardProps> = ({ cart }) => {
  const router = useRouter();

  const getStatusTranslation = () => {
    if (cart.status === 'ASSIGNED') {
      return translate('pages.history.status.assigned');
    }
    if (cart.status === 'COLLECTED') {
      return translate('pages.history.status.collected');
    }
    if (cart.status === 'PENDING') {
      return translate('pages.history.status.pending');
    }
    return translate('pages.history.status.available');
  };

  return (
    <View className="mb-4 rounded-xl bg-white p-4 shadow-sm dark:bg-neutral-800">
      {/* Header with shop and status */}
      <Pressable
        onPress={() =>
          router.push(`/${RECIPIENT_ROOT_PATH}/stores/${cart.shop}`)
        }
        className="mb-3 flex-row items-center gap-2"
      >
        <MapPin color="#6b7280" size={20} />
        <Text className="flex-1 text-lg font-semibold text-neutral-900 dark:text-neutral-100">
          {cart.shop_name}
        </Text>
        <View className={`rounded-full px-3 py-1 ${statusColors[cart.status]}`}>
          <Text
            className={`text-xs font-medium ${statusTextColors[cart.status]}`}
          >
            {getStatusTranslation()}
          </Text>
        </View>
      </Pressable>

      {/* Article count */}
      <View className="mb-3 flex-row items-center">
        <Text className="text-sm text-neutral-600 dark:text-neutral-400">
          {cart.articles.length} {translate('pages.history.articles')}
        </Text>
      </View>

      {/* Action button */}
      {cart.status === 'ASSIGNED' && (
        <Button
          variant="default"
          className="w-full"
          onPress={() => router.push(`/${RECIPIENT_ROOT_PATH}/cart/${cart.id}`)}
        >
          <Text className="font-semibold text-white">
            {translate('pages.basket.pickup-basket')}
          </Text>
        </Button>
      )}
    </View>
  );
};
