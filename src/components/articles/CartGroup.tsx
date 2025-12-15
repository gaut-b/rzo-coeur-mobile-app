import React from 'react';

import { Text, View } from '@/components/ui';
import type { Article, ArticleCart } from '@/lib/hooks';
import { translate } from '@/lib/i18n';

import { ArticleCard } from './ArticleCard';

interface CartGroupProps {
  cartId: number;
  articles: Article[];
  cartStatus: ArticleCart['status'];
}

export const CartGroup = ({ cartId, articles, cartStatus }: CartGroupProps) => {
  const statusColor =
    cartStatus === 'COLLECTED'
      ? 'bg-green-600 dark:bg-green-700'
      : 'bg-yellow-600 dark:bg-yellow-700';

  return (
    <View className="mb-4">
      <View className={`mb-3 rounded-lg ${statusColor} p-3`}>
        <Text className="text-base font-bold text-white">
          {translate('pages.history.cart')} #{cartId}
        </Text>
        <Text className="mt-1 text-sm text-white opacity-90">
          {articles.length} {translate('pages.history.articles')}
        </Text>
      </View>

      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </View>
  );
};
