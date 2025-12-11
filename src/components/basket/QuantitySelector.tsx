import React from 'react';

import { Button, Input, Pressable, View } from '@/components/ui';
import { DeleteIcon } from '@/components/ui/icons/delete';
import { addArticle, deleteArticle, removeArticle } from '@/lib/state';
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
  return (
    <View className="w-1/3 flex-none items-center justify-center">
      {showSelectors && (
        <View className="absolute -top-2 right-2">
          <Pressable onPress={() => deleteArticle(item.id)}>
            <DeleteIcon fill="black" width={20} height={20} />
          </Pressable>
        </View>
      )}
      <View
        className={`align-center flex flex-row items-center justify-evenly rounded-full bg-orange-400 ${showSelectors ? 'w-32' : 'w-8'}`}
      >
        {showSelectors && (
          <Button
            variant="ghost"
            onPress={() => removeArticle(item, 1)}
            textClassName="no-underline text-2xl"
            className={
              isRemoveButtonDisabled ? 'text-gray-500 bg-orange-400' : ''
            }
            label="-"
            disabled={isRemoveButtonDisabled}
          />
        )}
        <Input
          id="Quantity"
          value={item.quantity.toString()}
          className="pt-1"
          disabled
        />
        {showSelectors && (
          <Button
            variant="ghost"
            textClassName="no-underline text-2xl"
            label="+"
            onPress={() => addArticle(item, 1)}
          />
        )}
      </View>
    </View>
  );
};
