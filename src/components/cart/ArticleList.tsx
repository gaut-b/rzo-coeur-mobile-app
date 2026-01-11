import { FlashList } from '@shopify/flash-list';
import React from 'react';

import { ArticleDetail } from '@/components/cart/ArticleDetail';
import { ScrollView } from '@/components/ui';
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
    ({ item }: { item: Article }) => <ArticleDetail item={item} />,
    []
  );

  const renderItem = customRenderItem || defaultRenderItem;

  return (
    <ScrollView className="py-8">
      <FlashList
        data={Object.values(articlesByBarcode)}
        renderItem={renderItem}
        keyExtractor={(_, index) => `item-${index}`}
        estimatedItemSize={108}
      />
    </ScrollView>
  );
}
