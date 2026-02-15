import React, { useMemo } from 'react';

import { ArticleCard } from '@/components/articles/ArticleCard';
import { CartGroup } from '@/components/articles/CartGroup';
import {
  FocusAwareStatusBar,
  Loader,
  ScrollView,
  showError,
  Text,
  View,
} from '@/components/ui';
import { type Article, type ArticleCart, useGetArticles } from '@/lib/hooks';
import { translate } from '@/lib/i18n';

export default function RecipientArticlesList() {
  const { data: articleList, isLoading, isError, error } = useGetArticles();

  React.useEffect(() => {
    if (isError) {
      showError(error);
    }
  }, [isError, error]);

  // Group articles by cart
  const { cartGroups, standaloneArticles } = useMemo(() => {
    if (!articleList) {
      return { cartGroups: [], standaloneArticles: [] };
    }

    const carts = new Map<
      number,
      { articles: Article[]; status: ArticleCart['status'] }
    >();
    const standalone: Article[] = [];

    articleList.articles.forEach((article) => {
      if (article.cart) {
        const existing = carts.get(article.cart.id);
        if (existing) {
          existing.articles.push(article);
        } else {
          carts.set(article.cart.id, {
            articles: [article],
            status: article.cart.status,
          });
        }
      } else {
        standalone.push(article);
      }
    });

    return {
      cartGroups: Array.from(carts.entries()).map(([id, data]) => ({
        cartId: id,
        ...data,
      })),
      standaloneArticles: standalone,
    };
  }, [articleList]);

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

  if (!articleList || articleList.articles.length === 0) {
    return (
      <View className="flex-1 items-center justify-center px-4">
        <FocusAwareStatusBar />
        <Text className="text-center text-lg text-neutral-600 dark:text-neutral-400">
          {translate('pages.history.empty')}
        </Text>
      </View>
    );
  }

  return (
    <View className="flex-1">
      <FocusAwareStatusBar />
      <ScrollView className="flex-1 bg-neutral-50 dark:bg-neutral-900">
        <View className="p-4">
          {/* Cart groups */}
          {cartGroups.map((group) => (
            <CartGroup
              key={group.cartId}
              cartId={group.cartId}
              articles={group.articles}
              cartStatus={group.status}
            />
          ))}

          {/* Standalone articles */}
          {standaloneArticles.length > 0 && (
            <View className="mt-2">
              {cartGroups.length > 0 && (
                <Text className="mb-3 text-base font-semibold text-neutral-700 dark:text-neutral-300">
                  {translate('pages.history.standalone_articles')}
                </Text>
              )}
              {standaloneArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
