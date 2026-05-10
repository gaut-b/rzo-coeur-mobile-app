import React from 'react';

import { Text, View } from '@/components/ui';
import type { Article, ArticleStatus } from '@/lib/hooks';
import { translate } from '@/lib/i18n';

interface ArticleHistoryCardProps {
  article: Article;
}

const STATUS_COLOR: Record<ArticleStatus, string> = {
  AVAILABLE: 'bg-neutral-100 text-neutral-600',
  PENDING: 'bg-neutral-100 text-neutral-600',
  COLLECTED: 'bg-green-100 text-green-800',
};

export const ArticleHistoryCard = ({ article }: ArticleHistoryCardProps) => {
  const color =
    STATUS_COLOR[article.status] ?? 'bg-neutral-100 text-neutral-800';
  const label = translate(
    `pages.history.status.${article.status.toLowerCase()}` as never
  );
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
        <View
          className={`rounded-full px-3 py-1 ${color}`}
          accessibilityLabel={label}
          accessible={true}
        >
          <Text className="text-xs font-medium">{label}</Text>
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
      </View>
    </View>
  );
};
