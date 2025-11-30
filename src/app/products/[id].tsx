import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { showMessage } from 'react-native-flash-message';

import { Button, Image, Text, View } from '@/components/ui';
import { useGetProduct } from '@/lib/hooks';
import { translate } from '@/lib/i18n';
import { addArticle } from '@/lib/state';

import ProductPageLayout from './product-page-layout';

const ProductDetail = () => {
  const router = useRouter();
  const { id: productId } = useLocalSearchParams<{ id: string }>();
  const { data, isPending, isError, error } = useGetProduct(productId);

  if (isPending) {
    return (
      <ProductPageLayout className="justify-center" showActivityIndicator />
    );
  }
  if (isError) {
    return (
      <ProductPageLayout className="justify-center">
        <Text className="text-center">Error loading post</Text>;
        <Text>{JSON.stringify(error)}</Text>
      </ProductPageLayout>
    );
  }

  return (
    <ProductPageLayout>
      <View className="flex h-1/2 flex-row gap-4">
        <View className="flex-2 m-2 h-3/4 grow overflow-hidden rounded-xl border border-neutral-300 bg-white  dark:bg-neutral-900">
          <Image
            className="size-full bg-gray-100"
            contentFit="contain"
            source={{
              uri: data.product.image_front_small_url,
            }}
            transition={1000}
          />
        </View>

        <View className="bg-blue h-full flex-1">
          <Text className="text-3xl">{data.product.product_name_fr}</Text>
          <Text className="text-2xl">{data.product.brands}</Text>
          <Text>
            {data.product.product_quantity}
            {data.product.product_quantity_unit}
          </Text>
        </View>
      </View>
      <Button
        variant="secondary"
        onPress={async () => {
          addArticle(
            {
              id: productId,
              productBrand: data.product.brands,
              productLabel: data.product.product_name_fr,
              productImgUrl: data.product.image_front_small_url,
              productThumbUrl: data.product.image_front_thumb_url,
            },
            1
          );
          showMessage({
            message: '🥑 Article correctement ajouté au Panier ! 🥦',
            description:
              "Vous allez être redirigé vers la page d'accueil. Appuyez ici pour scanner directement un nouvel article",
            type: 'success',
            position: 'bottom',
            hideOnPress: true,
            onHide: () => router.navigate('/'),
          });
        }}
      >
        <Text>{translate('pages.product.add')}</Text>
      </Button>
    </ProductPageLayout>
  );
};

export default ProductDetail;
