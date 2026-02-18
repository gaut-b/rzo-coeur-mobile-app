import { router } from 'expo-router';
import * as React from 'react';
import { showMessage } from 'react-native-flash-message';

import { CameraPaymentValidation } from '@/components/payment/CameraPaymentValidation';
import { Button, Loader, showError, Text, View } from '@/components/ui';
import { useCollectCart, useGetCartById } from '@/lib/hooks';
import { translate } from '@/lib/i18n';
import { type Article, useCashierStore } from '@/lib/state';

export default function CashierPaymentPage() {
  const recipientCartId = useCashierStore.use.recipientCartId();
  const recipientId = useCashierStore.use.clientId();

  const {
    data: recipientCart,
    isLoading,
    error,
  } = useGetCartById({ cartId: recipientCartId });

  const collectCartMutation = useCollectCart();

  React.useEffect(() => {
    if (error) {
      showError(error);
    }
  }, [error]);

  if (isLoading) {
    return <Loader />;
  }

  if (error || !recipientCart) {
    return (
      <View className="flex-1 items-center justify-center gap-4 p-4">
        <Text className="text-center text-lg text-red-600 dark:text-red-400">
          {translate('pages.payment.cashier.error-loading-cart')}
        </Text>
        <Button variant="secondary" onPress={() => router.push('/')}>
          <Text className="font-bold text-white">
            {translate('pages.payment.cashier.go-home')}
          </Text>
        </Button>
      </View>
    );
  }

  if (recipientCart.status === 'COLLECTED') {
    return (
      <View className="flex-1 items-center justify-center gap-4 p-4">
        <Text className="text-center text-lg text-red-600 dark:text-red-400">
          {translate('errors.cart.already-collected')}
        </Text>
        <Button
          variant="secondary"
          onPress={() => {
            useCashierStore.getState().clear();
            router.replace('/');
          }}
        >
          <Text className="font-bold text-white">
            {translate('pages.payment.cashier.go-home')}
          </Text>
        </Button>
      </View>
    );
  }

  const cartArticlesByBarcode = recipientCart.articles.reduce<
    Record<string, Article>
  >((acc, article) => {
    if (acc[article.barcode] === undefined) {
      return {
        ...acc,
        [article.barcode]: {
          id: article.id,
          barcode: String(article.barcode),
          quantity: 1,
          productLabel: article.name,
          productThumbUrl: article.thumb_url,
          productImgUrl: article.img_url,
          productBrand: article.brand_label,
        },
      };
    }
    return {
      ...acc,
      [article.barcode]: {
        ...acc[article.barcode],
        quantity: acc[article.barcode].quantity + 1,
      },
    };
  }, {});

  const onValidatePayment = () => {
    if (!cartArticlesByBarcode) return;

    collectCartMutation.mutate(
      {
        cartId: recipientCartId,
        recipientId: recipientId!,
      },
      {
        onSuccess: () => {
          useCashierStore.getState().clear();
          showMessage({
            message: translate('pages.payment.recipient.success-title'),
            description: translate('pages.payment.recipient.success-message'),
            type: 'success',
            duration: 4000,
          });
          router.push('/');
        },
        onError: showError,
      }
    );
  };

  return (
    <CameraPaymentValidation
      articlesByBarcode={cartArticlesByBarcode}
      onValidatePayment={onValidatePayment}
      validateButtonLabel={translate('pages.payment.recipient.validate')}
    />
  );
}
