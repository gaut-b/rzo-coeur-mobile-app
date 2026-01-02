import { FlashList } from '@shopify/flash-list';
import React from 'react';

import { ArticleDetail } from '@/components/cart/ArticleDetail';
import { ScrollView } from '@/components/ui';
import { type Article } from '@/lib/state';

type ArticleListProps = {
  readonly articleByIds: Map<string, Article>;
};

export default function ArticleList({ articleByIds }: ArticleListProps) {
  const renderItem = React.useCallback(
    ({ item }: { item: Article }) => <ArticleDetail item={item} />,
    []
  );

  return (
    <ScrollView>
      <FlashList
        data={Array.from(articleByIds.values())}
        renderItem={renderItem}
        keyExtractor={(_, index) => `item-${index}`}
      />
    </ScrollView>
  );
}
