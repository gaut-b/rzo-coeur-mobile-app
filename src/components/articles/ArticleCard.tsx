import React from 'react';

import { Text, View } from '@/components/ui';
import type { Article } from '@/lib/hooks';
import { translate } from '@/lib/i18n';

interface ArticleCardProps {
  article: Article;
}

const STATUS_CONFIG = {
  AVAILABLE: {
    label: translate('pages.history.status.available'),
    color: 'bg-blue-100 text-blue-800',
  },
  ASSIGNED: {
    label: translate('pages.history.status.assigned'),
    color: 'bg-yellow-100 text-yellow-800',
  },
  COLLECTED: {
    label: translate('pages.history.status.collected'),
    color: 'bg-green-100 text-green-800',
  },
};

export const ArticleCard = ({ article }: ArticleCardProps) => {
  const statusConfig = STATUS_CONFIG[article.status];
  const date = new Date(article.created_at).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <View className="mb-3 rounded-lg border border-neutral-200 bg-white p-4 shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
      <View className="mb-2 flex-row items-start justify-between">
        <Text className="flex-1 text-base font-semibold text-neutral-900 dark:text-neutral-100">
          {article.name}
        </Text>
        <View className={`rounded-full px-3 py-1 ${statusConfig.color}`}>
          <Text className="text-xs font-medium">{statusConfig.label}</Text>
        </View>
      </View>

      <View className="mt-2 flex-row items-center justify-between">
        <View className="flex-1">
          <Text className="text-sm text-neutral-600 dark:text-neutral-400">
            {article.shop.name}
          </Text>
          <Text className="mt-1 text-xs text-neutral-500 dark:text-neutral-500">
            {date}
          </Text>
        </View>

        {article.cart && (
          <View className="ml-2 rounded-md bg-neutral-100 px-2 py-1 dark:bg-neutral-700">
            <Text className="text-xs text-neutral-600 dark:text-neutral-400">
              {translate('pages.history.cart')} #{article.cart.id}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};
