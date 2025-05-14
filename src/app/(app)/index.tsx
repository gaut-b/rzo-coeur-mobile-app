import { FlashList } from '@shopify/flash-list';
import { useCameraPermissions } from 'expo-camera';
import { Link, useRouter } from 'expo-router';
import React from 'react';

import {
  Button,
  FocusAwareStatusBar,
  Image,
  Input,
  Pressable,
  ScrollView,
  Text,
  View,
} from '@/components/ui';
import BarcodeIcon from '@/components/ui/icons/barcode-icon';
import { CashierIcon } from '@/components/ui/icons/cashier-icon';
import { DeleteIcon } from '@/components/ui/icons/delete';
import {
  addArticle,
  deleteArticle,
  removeArticle,
  useBasket,
} from '@/lib/state/basket/basket.store';
import { type Article } from '@/lib/state/basket/types';

// eslint-disable-next-line max-lines-per-function
export default function Feed() {
  const [permission, requestPermission] = useCameraPermissions();
  const isPermissionGranted = Boolean(permission?.granted);
  const router = useRouter();
  const { articles: articlesById } = useBasket();

  const renderItem = React.useCallback(({ item }: { item: Article }) => {
    const isRemoveButtonDisabled = item.quantity === 1;
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

        <View className="w-1/3 flex-none items-center justify-center">
          <View className="absolute -top-2 right-2">
            <Pressable onPress={() => deleteArticle(item.id)}>
              <DeleteIcon fill="black" width={20} height={20} />
            </Pressable>
          </View>
          <View className="align-center flex w-32 flex-row items-center justify-evenly rounded-full bg-orange-400 ">
            <Button
              variant="ghost"
              onPress={() => removeArticle(item, 1)}
              textClassName="no-underline text-2xl"
              className={
                isRemoveButtonDisabled ? 'text-gray-65 bg-orange-400' : ''
              }
              label="-"
              disabled={isRemoveButtonDisabled}
            />
            <Input
              id="Quantity"
              value={item.quantity.toString()}
              className="pt-1"
              disabled
            />
            <Button
              variant="ghost"
              textClassName="no-underline text-2xl"
              label="+"
              onPress={() => addArticle(item, 1)}
            />
          </View>
        </View>
      </View>
    );
  }, []);

  // if (isError) {
  //   return (
  //     <View>
  //       <Text> Error Loading data </Text>
  //     </View>
  //   );
  // }
  return (
    <View className="relative flex-1">
      <FocusAwareStatusBar />
      <ScrollView>
        <FlashList
          data={Array.from(articlesById.values())}
          renderItem={renderItem}
          keyExtractor={(_, index) => `item-${index}`}
          estimatedItemSize={300}
        />
      </ScrollView>
      {articlesById.size !== 0 && (
        <Button
          variant="secondary"
          size="icon"
          className="absolute bottom-10 left-10 h-16 w-1/3 rounded-2xl bg-success-600"
          onPress={() => {
            if (!isPermissionGranted) {
              requestPermission();
            } else {
              router.navigate('/payment');
            }
          }}
        >
          <View className="w-full flex-row items-center justify-evenly">
            <CashierIcon fill="white" width={40} height={40} />
            <Text
              // numberOfLines={2}
              className="ml-2 flex-1 text-center font-bold text-white"
            >
              Passer en caisse
            </Text>
          </View>
        </Button>
      )}
      <Button
        variant="secondary"
        size="icon"
        className="absolute bottom-10 right-10 h-16 w-1/3 rounded-2xl bg-success-600"
        onPress={() => {
          if (!isPermissionGranted) {
            requestPermission();
          } else {
            router.navigate('/scanner');
          }
        }}
      >
        <View className="w-full flex-row items-center justify-evenly">
          <BarcodeIcon fill="white" />
          <Text className="font-bold text-white">Scan</Text>
        </View>
      </Button>
    </View>
  );
}
