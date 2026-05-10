import React, { useMemo } from 'react';

import { ArticleHistoryCard } from '@/components/articles/ArticleCard';
import {
  FocusAwareStatusBar,
  Loader,
  ScrollView,
  showError,
  Text,
  View,
} from '@/components/ui';
import { useGetArticles } from '@/lib/hooks';
import { translate } from '@/lib/i18n';

export default function ClientArticlesList() {
  const { data: articleList, isLoading, isError, error } = useGetArticles();

  React.useEffect(() => {
    if (isError) {
      showError(error);
    }
  }, [isError, error]);

  const sortedArticles = useMemo(() => {
    if (!articleList) return [];
    return [...articleList.articles].sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
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
          {sortedArticles.map((article) => (
            <ArticleHistoryCard key={article.id} article={article} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
