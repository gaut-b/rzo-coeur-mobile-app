import { useCameraPermissions } from 'expo-camera';
import { useRouter } from 'expo-router';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  ArticleCard,
  transformArticleToCardProps,
} from '@/components/cart/ArticleCard';
import ArticleList from '@/components/cart/ArticleList';
import { ArticleQuantitySelector } from '@/components/cart/QuantitySelector';
import { Button, FocusAwareStatusBar, Text, View } from '@/components/ui';
import BarcodeIcon from '@/components/ui/icons/barcode-icon';
import { CashierIcon } from '@/components/ui/icons/cashier-icon';
import { translate } from '@/lib/i18n';
import { useAuthStore, useBasketStore } from '@/lib/state';
import { CLIENT_ROOT_PATH } from '@/lib/types';

export default function ClientBasket() {
  const [permission, requestPermission] = useCameraPermissions();
  const isPermissionGranted = Boolean(permission?.granted);
  const router = useRouter();
  const articlesByBarcode = useBasketStore.use.articlesByBarcode();
  const firstName = useAuthStore((state) => state.user?.firstName);

  const nbArticles = Object.values(articlesByBarcode).reduce(
    (sum, article) => sum + article.quantity,
    0
  );
  const isEmpty = nbArticles === 0;
  const insets = useSafeAreaInsets();

  const navigateToScanner = () => {
    if (isPermissionGranted) {
      router.navigate(`/${CLIENT_ROOT_PATH}/scanner`);
    } else {
      requestPermission();
    }
  };

  return (
    <View className="flex-1">
      <FocusAwareStatusBar />

      {/* Content */}
      {isEmpty ? (
        <View className="flex-1 items-center justify-center gap-4 p-8">
          <Text className="text-center text-3xl tracking-tight">
            {translate('pages.basket.greeting', { firstName })}
          </Text>
          <Text className="text-center text-lg tracking-tight text-neutral-500">
            {translate('pages.basket.empty-basket')}
          </Text>
        </View>
      ) : (
        <ArticleList
          articlesByBarcode={articlesByBarcode}
          renderItem={({ item }) => (
            <ArticleCard
              article={transformArticleToCardProps(item)}
              hideQuantity
              renderRight={() => <ArticleQuantitySelector item={item} />}
            />
          )}
        />
      )}

      {/* Footer */}
      <View
        style={{ paddingBottom: Math.max(insets.bottom, 8) }}
        className="px-4 gap-3"
      >
        {!isEmpty && (
          <Button
            variant="secondary"
            size="lg"
            className="rounded-2xl bg-success-600"
            onPress={() => {
              if (isPermissionGranted) {
                router.navigate(`/${CLIENT_ROOT_PATH}/payment`);
              } else {
                requestPermission();
              }
            }}
          >
            <CashierIcon fill="white" width={24} height={24} />
            <Text className="ml-2 font-bold text-white">
              {translate('pages.basket.checkout')}
            </Text>
            <Text className="ml-1 font-normal text-white/70">
              {'· '}
              {translate('pages.basket.checkout-count', { count: nbArticles })}
            </Text>
          </Button>
        )}

        <Button
          variant="secondary"
          size="lg"
          className="rounded-2xl bg-success-600"
          onPress={navigateToScanner}
        >
          <BarcodeIcon fill="white" />
          <Text className="ml-2 font-bold text-white">
            {translate('pages.basket.scan')}
          </Text>
        </Button>
      </View>
    </View>
  );
}
