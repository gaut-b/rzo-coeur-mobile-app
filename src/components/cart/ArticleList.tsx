import { FlashList } from '@shopify/flash-list';
import React from 'react';

import {
  ArticleCard,
  transformArticleToCardProps,
} from '@/components/cart/ArticleCard';
import { type Article } from '@/lib/state';

type ArticleListProps = {
  readonly articlesByBarcode: Record<string, Article>;
  readonly renderItem?: ({ item }: { item: Article }) => React.ReactElement;
};

export default function ArticleList({
  articlesByBarcode,
  renderItem: customRenderItem,
}: ArticleListProps) {
  const defaultRenderItem = React.useCallback(
    ({ item }: { item: Article }) => (
      <ArticleCard article={transformArticleToCardProps(item)} />
    ),
    []
  );

  const renderItem = customRenderItem || defaultRenderItem;

  return (
    <FlashList
      data={Object.values(articlesByBarcode)}
      renderItem={renderItem}
      keyExtractor={(item) => item.barcode}
      estimatedItemSize={108}
      contentContainerStyle={{ paddingVertical: 8 }}
    />
  );
}
