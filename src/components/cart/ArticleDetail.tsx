import { Link } from 'expo-router';
import React from 'react';

import { Image, Pressable, Text, View } from '@/components/ui';
import { type Article, useAuthStore } from '@/lib/state';

import { ArticleQuantitySelector } from './QuantitySelector';

type ArticleDetailProps = {
  item: Article;
  renderRight?: () => React.ReactNode;
  onPress?: (article: Article) => void;
};

export const ArticleDetail = ({
  item,
  renderRight,
  onPress,
}: ArticleDetailProps) => {
  const currentRole = useAuthStore((state) => state.user?.role);

  // Custom render for right side (e.g., for cashier scan status)
  if (renderRight) {
    const handlePress = onPress ? () => onPress(item) : undefined;

    return (
      <View className="mx-4 mb-3 flex-row overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
        <Pressable className="flex flex-1 flex-row p-4" onPress={handlePress}>
          <View className="h-24 w-24 flex-none overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-700">
            <Image
              className="h-full w-full"
              contentFit="contain"
              source={{
                uri: item.productThumbUrl,
              }}
              transition={1000}
            />
          </View>
          <View className="ml-3 flex-1 justify-center">
            <Text
              className="text-base font-semibold text-neutral-900 dark:text-neutral-100"
              numberOfLines={2}
            >
              {item.productLabel}
            </Text>
            {item.productBrand && (
              <Text
                className="mt-1 text-sm text-neutral-600 dark:text-neutral-400"
                numberOfLines={1}
              >
                {item.productBrand}
              </Text>
            )}
          </View>
        </Pressable>
        <View className="w-32 justify-center border-l border-neutral-200 dark:border-neutral-700">
          {renderRight()}
        </View>
      </View>
    );
  }

  if (currentRole === 'CLIENT') {
    return (
      <View className="mx-4 mb-3 flex-row overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
        <Link href={`/products/${item.barcode}`} asChild>
          <Pressable className="flex flex-1 flex-row p-4">
            <View className="h-24 w-24 flex-none overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-700">
              <Image
                className="h-full w-full"
                contentFit="contain"
                source={{
                  uri: item.productThumbUrl,
                }}
                transition={1000}
              />
            </View>
            <View className="ml-3 flex-1 justify-center">
              <Text
                className="text-base font-semibold text-neutral-900 dark:text-neutral-100"
                numberOfLines={2}
              >
                {item.productLabel}
              </Text>
            </View>
          </Pressable>
        </Link>
        <View className="justify-center border-l border-neutral-200 px-3 dark:border-neutral-700">
          <ArticleQuantitySelector item={item} />
        </View>
      </View>
    );
  } else if (currentRole === 'RECIPIENT') {
    return (
      <View className="mx-4 mb-3 flex-row overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
        <Link href={`/products/${item.barcode}`} asChild>
          <Pressable className="flex flex-1 flex-row p-4">
            <View className="h-24 w-24 flex-none overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-700">
              <Image
                className="h-full w-full"
                contentFit="cover"
                source={{
                  uri: item.productThumbUrl,
                }}
                transition={1000}
              />
            </View>
            <View className="ml-3 flex-1 justify-center">
              <Text
                className="text-base font-semibold text-neutral-900 dark:text-neutral-100"
                numberOfLines={2}
              >
                {item.productLabel}
              </Text>
            </View>
          </Pressable>
        </Link>
        <View className="justify-center border-l border-neutral-200 px-3 dark:border-neutral-700">
          <ArticleQuantitySelector item={item} showSelectors={false} />
        </View>
      </View>
    );
  }

  return null;
};
