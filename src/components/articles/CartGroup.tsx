import React from 'react';

import { Text, View } from '@/components/ui';
import type { Article, ArticleCart } from '@/lib/hooks';
import { translate } from '@/lib/i18n';

import { ArticleHistoryCard } from './ArticleCard';

interface CartGroupProps {
  cartId: number;
  articles: Article[];
  cartStatus: ArticleCart['status'];
}

export const CartGroup = ({ cartId, articles, cartStatus }: CartGroupProps) => {
  const statusColor =
    cartStatus === 'COLLECTED'
      ? 'bg-success-600 dark:bg-success-700'
      : 'bg-warning-600 dark:bg-warning-700';

  const statusLabel =
    cartStatus === 'COLLECTED'
      ? translate('pages.history.status.collected')
      : translate('pages.history.status.assigned');

  return (
    <View className="mb-4">
      <View
        className={`mb-3 rounded-lg ${statusColor} p-3`}
        accessibilityLabel={`${translate('pages.history.cart')} #${cartId} — ${statusLabel}`}
      >
        <Text className="text-base font-bold text-white">
          {translate('pages.history.cart')} #{cartId}
        </Text>
        <Text className="mt-1 text-sm text-white opacity-90">
          {articles.length} {translate('pages.history.articles')}
        </Text>
      </View>

      {articles.map((article) => (
        <ArticleHistoryCard key={article.id} article={article} />
      ))}
    </View>
  );
};
