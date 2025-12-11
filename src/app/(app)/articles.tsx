import React from 'react';

import { FocusAwareStatusBar, Text, View } from '@/components/ui';
import { useGetArticles } from '@/lib/hooks';

export default function ArticlesList() {
  const { data: articleList, isLoading } = useGetArticles();

  if (isLoading || !articleList) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }

  return (
    <View className={`relative flex-1}`}>
      <FocusAwareStatusBar />
      {articleList.articles.map((article) => (
        <View
          key={article.id}
          className="border- m-4 flex h-40 flex-row gap-4 rounded-xl border-2 p-4"
        >
          <Text className="text-center text-3xl tracking-tight"></Text>
          <Text className="text-3xl ">{article.name}</Text>
          <Text className="text-2xl">Shop: {article.shop.name}</Text>
          <Text className="text-2xl">Status: {article.status}</Text>
        </View>
      ))}
    </View>
  );
}
