import React from 'react';

import { Image, Text, View } from '@/components/ui';
import { type Article } from '@/lib/state';

export type ArticleCardProps = {
  article: {
    thumb_url?: string | null;
    name?: string;
    barcode: string | number;
    quantity?: number;
  };
  renderRight?: () => React.ReactNode;
  variant?: 'default' | 'success';
  hideQuantity?: boolean;
};

export const transformArticleToCardProps = (
  article: Article
): ArticleCardProps['article'] => ({
  thumb_url: article.productThumbUrl,
  name: article.productLabel,
  barcode: article.barcode,
  quantity: article.quantity,
});

export const ArticleCard = ({
  article,
  renderRight,
  variant = 'default',
  hideQuantity = false,
}: ArticleCardProps) => {
  const showQuantity =
    !hideQuantity && article.quantity != null && article.quantity > 1;

  return (
    <View
      className={`mx-4 mb-3 overflow-hidden rounded-xl border bg-white p-4 shadow-sm dark:bg-neutral-800 ${
        variant === 'success'
          ? 'border-success-300 dark:border-success-700'
          : 'border-neutral-200 dark:border-neutral-700'
      }`}
    >
      <View className="flex-row items-center">
        {/* Article thumbnail */}
        {article.thumb_url && (
          <View className="mr-3 h-16 w-16 flex-none overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-700">
            <Image
              className="h-full w-full"
              contentFit="contain"
              source={{ uri: article.thumb_url }}
            />
          </View>
        )}

        <View className="flex-1 justify-center">
          <Text
            className="text-base font-semibold text-neutral-900 dark:text-neutral-100"
            numberOfLines={2}
          >
            {article.name || ''}
          </Text>
          <View className="mt-1 flex-row items-center">
            <Text className="flex-1 text-sm text-neutral-600 dark:text-neutral-400">
              {article.barcode}
            </Text>
            {showQuantity && (
              <View className="ml-2 rounded-full bg-neutral-200 px-2.5 py-0.5 dark:bg-neutral-700">
                <Text className="text-xs font-medium text-neutral-900 dark:text-neutral-100">
                  x{article.quantity}
                </Text>
              </View>
            )}
          </View>
        </View>

        {renderRight && (
          <View className="ml-3 self-center">{renderRight()}</View>
        )}
      </View>
    </View>
  );
};
