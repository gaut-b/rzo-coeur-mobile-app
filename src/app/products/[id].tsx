import { Redirect, useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { showMessage } from 'react-native-flash-message';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button, Image, Text, View } from '@/components/ui';
import { Basket } from '@/components/ui/icons';
import { useGetProduct } from '@/lib/hooks';
import { translate } from '@/lib/i18n';
import { addArticle } from '@/lib/state';

import ProductPageLayout from './product-page-layout';

const ProductDetail = () => {
  const router = useRouter();
  const { id: productId } = useLocalSearchParams<{ id: string }>();
  const { data, isPending, isError } = useGetProduct(productId);
  const insets = useSafeAreaInsets();

  if (isPending) {
    return (
      <ProductPageLayout className="justify-center" showActivityIndicator />
    );
  }
  if (isError) {
    return (
      <Redirect
        href={`/products/manual-entry?barcode=${encodeURIComponent(productId ?? '')}`}
      />
    );
  }

  if (data?.status === 0) {
    return (
      <Redirect
        href={`/products/manual-entry?barcode=${encodeURIComponent(productId ?? '')}`}
      />
    );
  }

  return (
    <ProductPageLayout>
      <View className="flex-1">
        {/* Content */}
        <View className="flex-1 gap-6">
          {/* Hero Image */}
          <View className="h-64 w-full overflow-hidden rounded-2xl bg-neutral-50 dark:bg-neutral-900">
            <Image
              className="size-full"
              contentFit="contain"
              source={{ uri: data.product.image_front_small_url }}
              transition={300}
            />
          </View>

          {/* Product Info */}
          <View className="w-full gap-1">
            {data.product.brands ? (
              <Text className="text-xs font-semibold uppercase tracking-widest text-primary-600">
                {data.product.brands}
              </Text>
            ) : null}

            <Text className="text-2xl font-bold leading-tight">
              {data.product.product_name_fr}
            </Text>

            <View className="mt-2 flex-row flex-wrap gap-2">
              {data.product.product_quantity ? (
                <View className="rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 dark:border-neutral-700 dark:bg-neutral-800">
                  <Text className="text-sm text-neutral-600 dark:text-neutral-300">
                    {data.product.product_quantity}
                    {data.product.product_quantity_unit
                      ? ` ${data.product.product_quantity_unit}`
                      : ''}
                  </Text>
                </View>
              ) : null}
            </View>
          </View>
        </View>

        {/* CTA Button - anchored at bottom */}
        <View style={{ paddingBottom: insets.bottom }}>
          <Button
            variant="secondary"
            size="lg"
            className="rounded-2xl"
            onPress={async () => {
              addArticle(
                {
                  id: null,
                  barcode: data.product.code,
                  productBrand: data.product.brands,
                  productLabel: data.product.product_name_fr,
                  productImgUrl: data.product.image_front_small_url,
                  productThumbUrl: data.product.image_front_thumb_url,
                },
                1
              );
              router.navigate('/');
              showMessage({
                message: translate('pages.product.success-message'),
                type: 'success',
                position: 'top',
                hideOnPress: true,
              });
            }}
          >
            <Basket color="white" width={20} height={20} />
            <Text className="ml-2 font-bold text-white">
              {translate('pages.product.add')}
            </Text>
          </Button>
        </View>
      </View>
    </ProductPageLayout>
  );
};

export default ProductDetail;
