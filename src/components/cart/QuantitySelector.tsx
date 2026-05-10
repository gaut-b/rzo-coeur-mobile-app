import React from 'react';

import { Pressable, Text, View } from '@/components/ui';
import { DeleteIcon } from '@/components/ui/icons/delete';
import { useBasketStore } from '@/lib/state';
import { type Article } from '@/lib/state';

type ArticleQuantitySelectorProps = {
  item: Article;
  showSelectors?: boolean;
};

export const ArticleQuantitySelector = ({
  item,
  showSelectors = true,
}: ArticleQuantitySelectorProps) => {
  const deleteArticle = useBasketStore.use.deleteArticle();
  const addArticle = useBasketStore.use.addArticle();
  const removeArticle = useBasketStore.use.removeArticle();

  return (
    <View className="flex-row items-center overflow-hidden rounded-xl border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
      {showSelectors && (
        <Pressable
          onPress={() =>
            item.quantity === 1
              ? deleteArticle(item.barcode)
              : removeArticle(item, 1)
          }
          accessibilityRole="button"
          accessibilityLabel={
            item.quantity === 1
              ? 'Supprimer cet article'
              : 'Diminuer la quantité'
          }
          className="px-3 py-2.5 active:bg-neutral-100 dark:active:bg-neutral-700"
        >
          {item.quantity === 1 ? (
            <DeleteIcon
              className="text-red-500 dark:text-red-400"
              width={16}
              height={16}
            />
          ) : (
            <Text className="text-lg font-bold leading-none text-neutral-700 dark:text-neutral-200">
              −
            </Text>
          )}
        </Pressable>
      )}

      <View className="min-w-[32px] items-center justify-center border-x border-neutral-200 px-2 py-2.5 dark:border-neutral-600">
        <Text className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
          {item.quantity}
        </Text>
      </View>

      {showSelectors && (
        <Pressable
          onPress={() => addArticle(item, 1)}
          accessibilityRole="button"
          accessibilityLabel="Augmenter la quantité"
          className="px-3 py-2.5 active:bg-neutral-100 dark:active:bg-neutral-700"
        >
          <Text className="text-lg font-bold leading-none text-neutral-700 dark:text-neutral-200">
            +
          </Text>
        </Pressable>
      )}
    </View>
  );
};
