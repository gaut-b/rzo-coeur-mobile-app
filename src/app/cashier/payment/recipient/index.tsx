import { Stack } from 'expo-router';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import {
  BarcodeCreatorView,
  BarcodeFormat,
} from 'react-native-barcode-creator';
import { useSharedValue } from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';
import { type CarouselRenderItemInfo } from 'react-native-reanimated-carousel/lib/typescript/types';

import { Button, Text, View } from '@/components/ui';
import { translate } from '@/lib/i18n';
const articleList = [
  {
    id: '3166296203482',
    productBrand: 'Ducros, McCormick',
    productImgUrl:
      'https://images.openfoodfacts.net/images/products/316/629/620/3482/front_fr.22.200.jpg',
    productLabel: 'Poivre noir en grains Ducros Force 6',
    productThumbUrl:
      'https://images.openfoodfacts.net/images/products/316/629/620/3482/front_fr.22.100.jpg',
    quantity: 1,
  },
  {
    id: '3166296203482',
    productBrand: 'Ducros, McCormick',
    productImgUrl:
      'https://images.openfoodfacts.net/images/products/316/629/620/3482/front_fr.22.200.jpg',
    productLabel: 'Poivre noir en grains Ducros Force 6',
    productThumbUrl:
      'https://images.openfoodfacts.net/images/products/316/629/620/3482/front_fr.22.100.jpg',
    quantity: 1,
  },
  {
    id: '6203482316629',
    productBrand: 'Ducros, McCormick',
    productImgUrl:
      'https://images.openfoodfacts.net/images/products/316/629/620/3482/front_fr.22.200.jpg',
    productLabel: 'Poivre noir en grains Ducros Force 6',
    productThumbUrl:
      'https://images.openfoodfacts.net/images/products/316/629/620/3482/front_fr.22.100.jpg',
    quantity: 1,
  },
];

function renderItem(
  info: CarouselRenderItemInfo<(typeof articleList)[number]>
) {
  return (
    <View className="m-0 flex size-full items-center justify-center ">
      <BarcodeCreatorView
        value={info.item.id}
        format={BarcodeFormat.EAN13}
        background={'#FFFFFF'}
        foregroundColor={'#000000'}
        style={styles.container}
      />
      <Text>{`${info.index + 1} / ${articleList.length}`}</Text>
    </View>
  );
}

export default function CashierPaymentPage() {
  const progress = useSharedValue<number>(0);

  return (
    <View
      id="carousel-component"
      className="flex size-full flex-col justify-between"
    >
      <Stack.Screen
        options={{
          title: translate('pages.payment.title'),
        }}
      />
      <View className="h-full shrink">
        <Carousel
          data={articleList}
          height={258}
          pagingEnabled={true}
          snapEnabled={true}
          width={432}
          style={{
            width: 432,
            height: '100%',
            alignItems: 'center',
          }}
          loop={false}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 1,
            parallaxScrollingOffset: 0,
          }}
          onProgressChange={progress}
          renderItem={renderItem}
        />
      </View>
      <Button variant="secondary" className="m-20 h-20">
        <Text className="ml-2 flex-1 text-center font-bold text-white">
          {translate('pages.payment.validate')}
        </Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 100,
  },
});
