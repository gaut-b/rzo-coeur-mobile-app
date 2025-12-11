/* eslint-disable max-lines-per-function */
import { useCameraPermissions } from 'expo-camera';
import { useRouter } from 'expo-router';
import React from 'react';

import ArticleList from '@/components/basket/ArticleList';
import { Button, FocusAwareStatusBar, Text, View } from '@/components/ui';
import BarcodeIcon from '@/components/ui/icons/barcode-icon';
import { CashierIcon } from '@/components/ui/icons/cashier-icon';
import { translate } from '@/lib/i18n';
import { useAuthStore, useBasketStore } from '@/lib/state';

export default function Basket() {
  const [permission, requestPermission] = useCameraPermissions();
  const isPermissionGranted = Boolean(permission?.granted);
  const router = useRouter();
  const { articles: articlesById } = useBasketStore();
  const firstName = useAuthStore((state) => state.user?.firstName);
  const userRole = useAuthStore((state) => state.user?.role);

  const isCashier = userRole === 'CASHIER';
  const canUseScan = userRole !== 'RECIPIENT';
  const canGoToPayment = articlesById.size !== 0 && !isCashier;

  return (
    <View
      className={`relative flex-1 ${isCashier ? 'items-center justify-center' : ''}`}
    >
      <FocusAwareStatusBar />
      {isCashier ? (
        <Text className="text-center text-3xl tracking-tight">
          {translate('pages.payment.content-cashier')}
        </Text>
      ) : (
        <>
          {articlesById.size === 0 ? (
            <View className="flex-1 justify-center items-center m-4 gap-4">
              <Text className="text-center text-3xl tracking-tight">
                {translate('pages.basket.greeting', {
                  firstName,
                })}
              </Text>
              <Text className="text-center text-lg tracking-tight">
                {translate('pages.basket.empty-basket')}
              </Text>
            </View>
          ) : (
            <ArticleList articleByIds={articlesById} />
          )}
        </>
      )}

      {canGoToPayment && (
        <Button
          variant="secondary"
          size="icon"
          className="absolute bottom-10 left-10 h-16 w-1/3 rounded-2xl bg-success-600"
          onPress={() => {
            if (isPermissionGranted) {
              router.navigate('/payment');
            } else {
              requestPermission();
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
      {canUseScan && (
        <Button
          variant="secondary"
          size="icon"
          className="absolute bottom-10 right-10 h-16 w-1/3 rounded-2xl bg-success-600"
          onPress={() => {
            if (isPermissionGranted) {
              router.navigate('/scanner');
            } else {
              requestPermission();
            }
          }}
        >
          <View className="w-full flex-row items-center justify-evenly">
            <BarcodeIcon fill="white" />
            <Text className="font-bold text-white">Scan</Text>
          </View>
        </Button>
      )}
    </View>
  );
}
