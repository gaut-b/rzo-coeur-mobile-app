import { Text, View } from '@/components/ui';
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
    <View>
      {articleList.articles.map((article) => (
        <View key={article.id}>
          <Text className="text-3xl ">{article.name}</Text>
          <Text className="text-2xl">Shop: {article.shop.name}</Text>
          <Text className="text-2xl">Status: {article.status}</Text>
        </View>
      ))}
    </View>
  );
}
