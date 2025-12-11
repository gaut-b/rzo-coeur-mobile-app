import { Link } from 'expo-router';
import React from 'react';

import { Image, Pressable, Text, View } from '@/components/ui';
import { type Article, useAuthStore } from '@/lib/state';

import { ArticleQuantitySelector } from './QuantitySelector';

export const ArticleDetail = ({ item }: { item: Article }) => {
  const currentRole = useAuthStore((state) => state.user?.role);

  if (currentRole === 'CLIENT') {
    return (
      <View className="border- m-4 flex h-40 flex-row gap-4 rounded-xl border-2 p-4">
        <Link href={`/products/${item.id}`} asChild>
          <Pressable className="flex w-2/3 flex-row gap-4">
            <View className="h-full w-1/3 flex-none ">
              <Image
                className="h-full"
                contentFit="contain"
                source={{
                  uri: item.productThumbUrl,
                }}
                transition={1000}
              />
            </View>
            <View className="text-truncate w-2/3 flex-none content-start justify-center">
              <Text numberOfLines={1}>{item.productLabel}</Text>
            </View>
          </Pressable>
        </Link>
        <ArticleQuantitySelector item={item} />
      </View>
    );
  } else if (currentRole === 'RECIPIENT') {
    return (
      <View className="border- m-4 flex h-40 flex-row gap-4 rounded-xl border-2 p-4">
        <Link href={`/products/${item.id}`} asChild>
          <Pressable className="flex w-2/3 flex-row gap-4">
            <View className="h-full w-1/3 flex-none ">
              <Image
                className="h-full"
                contentFit="contain"
                source={{
                  uri: item.productThumbUrl,
                }}
                transition={1000}
              />
            </View>
            <View className="text-truncate w-2/3 flex-none content-start justify-center">
              <Text numberOfLines={1}>{item.productLabel}</Text>
            </View>
          </Pressable>
        </Link>

        <ArticleQuantitySelector item={item} showSelectors={false} />
      </View>
    );
  }

  return null;
};
