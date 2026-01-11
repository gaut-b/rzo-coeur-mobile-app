import { router, Stack } from 'expo-router';
import * as React from 'react';
import { showMessage } from 'react-native-flash-message';

import { ArticleDetail } from '@/components/cart/ArticleDetail';
import ArticleList from '@/components/cart/ArticleList';
import { BarcodeDisplayModal } from '@/components/cart/BarcodeDisplayModal';
import { ScanStatusIndicator } from '@/components/cart/ScanStatusIndicator';
import {
  Button,
  Loader,
  showError,
  Text,
  useModal,
  View,
} from '@/components/ui';
import { useCollectCart, useGetCartById } from '@/lib/hooks';
import { translate } from '@/lib/i18n';
import { type Article, useCashierStore } from '@/lib/state';

export default function CashierPaymentPage() {
  const recipientCartId = useCashierStore.use.recipientCartId();
  const scannedArticles = useCashierStore.use.scannedBarcodes();
  const clearScannedArticles = useCashierStore.use.clearScannedArticles();
  const recipientId = useCashierStore.use.clientId();
  const [selectedArticle, setSelectedArticle] = React.useState<Article | null>(
    null
  );

  const {
    data: recipientCart,
    isLoading,
    error,
  } = useGetCartById({ cartId: recipientCartId });

  const collectCartMutation = useCollectCart();

  const barcodeModal = useModal();

  // Clear scanned articles on mount to start fresh
  React.useEffect(() => {
    clearScannedArticles();

    return () => {
      useCashierStore.getState().clear();
    };
  }, [clearScannedArticles]);

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

  const cartArticlesIds = cartArticlesByBarcode
    ? Object.keys(cartArticlesByBarcode)
    : [];

  const allArticlesScanned =
    !cartArticlesByBarcode || cartArticlesIds.length === 0
      ? false
      : cartArticlesIds.every((barcode) => {
          const article = cartArticlesByBarcode[barcode];
          const scannedCount = scannedArticles[barcode] || 0;
          return scannedCount >= article.quantity;
        });

  const onScanSuccess = () => {
    barcodeModal.dismiss();
    setSelectedArticle(null);
  };

  const onArticleClick = (article: Article) => {
    setSelectedArticle(article);
    barcodeModal.present();
  };

  const onValidatePayment = () => {
    if (!cartArticlesByBarcode) return;

    collectCartMutation.mutate(
      {
        cartId: recipientCartId,
        recipientId: recipientId!,
      },
      {
        onSuccess: () => {
          showMessage({
            message: translate('pages.payment.recipient.success-title'),
            description: translate('pages.payment.recipient.success-message'),
            type: 'success',
            duration: 4000,
          });
          router.push('/');
        },
        //@ts-expect-error. TODO: fix errors
        onError: showError,
      }
    );
  };

  if (cartArticlesByBarcode === null) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>{translate('pages.recipient.empty-baskets')}</Text>
      </View>
    );
  }

  return (
    <View className="flex size-full flex-col">
      <Stack.Screen
        options={{
          title: translate('pages.payment.title'),
        }}
      />

      {/* Article list with scan status */}
      <ArticleList
        articlesByBarcode={cartArticlesByBarcode}
        renderItem={({ item }) => {
          const scannedCount = scannedArticles[item.barcode] || 0;
          const isScanned = scannedCount >= item.quantity;

          return (
            <ArticleDetail
              item={item}
              onPress={() => onArticleClick(item)}
              renderRight={() => (
                <ScanStatusIndicator
                  isScanned={isScanned}
                  onPress={() => onArticleClick(item)}
                  scannedCount={scannedCount}
                  totalCount={item.quantity}
                />
              )}
            />
          );
        }}
      />

      {/* Validation button */}
      <View className="border-t border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-800">
        <Button
          variant="secondary"
          className="h-14"
          onPress={onValidatePayment}
          disabled={!allArticlesScanned}
        >
          <Text className="font-bold text-white">
            {translate('pages.payment.recipient.validate')}
          </Text>
        </Button>
      </View>

      {/* Barcode display modal */}
      <BarcodeDisplayModal
        ref={barcodeModal.ref}
        article={selectedArticle}
        onScanComplete={onScanSuccess}
      />
    </View>
  );
}
