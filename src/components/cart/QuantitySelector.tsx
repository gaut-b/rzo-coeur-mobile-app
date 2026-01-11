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
  const isRemoveButtonDisabled = item.quantity === 1;

  const deleteArticle = useBasketStore.use.deleteArticle();
  const addArticle = useBasketStore.use.addArticle();
  const removeArticle = useBasketStore.use.removeArticle();

  return (
    <View className="items-center">
      {showSelectors && (
        <Pressable
          onPress={() => {
            deleteArticle(item.barcode);
          }}
          className="mb-2 rounded-full bg-red-100 p-2 active:bg-red-200 dark:bg-red-900/30 dark:active:bg-red-900/50"
        >
          <DeleteIcon
            className="text-red-600 dark:text-red-400"
            width={18}
            height={18}
          />
        </Pressable>
      )}
      <View
        className={`flex-row items-center overflow-hidden rounded-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-700 ${showSelectors ? '' : ''}`}
      >
        {showSelectors && (
          <Pressable
            onPress={() => {
              removeArticle(item, 1);
            }}
            disabled={isRemoveButtonDisabled}
            className={`px-3 py-2 active:bg-neutral-100 dark:active:bg-neutral-600 ${isRemoveButtonDisabled ? 'opacity-40' : ''}`}
          >
            <Text className="text-xl font-bold text-neutral-700 dark:text-neutral-200">
              −
            </Text>
          </Pressable>
        )}
        <View
          className={`items-center justify-center ${showSelectors ? 'min-w-[40px] border-x border-neutral-200 dark:border-neutral-600' : 'px-3'}`}
        >
          <Text className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
            {item.quantity}
          </Text>
        </View>
        {showSelectors && (
          <Pressable
            onPress={() => addArticle(item, 1)}
            className="px-3 py-2 active:bg-neutral-100 dark:active:bg-neutral-600"
          >
            <Text className="text-xl font-bold text-neutral-700 dark:text-neutral-200">
              +
            </Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};
