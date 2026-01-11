import { Stack } from 'expo-router';
import * as React from 'react';
import { showMessage } from 'react-native-flash-message';
import { type CreateArticlesRequestBody, useCreateArticles } from 'src/lib';

import { ArticleDetail } from '@/components/cart/ArticleDetail';
import ArticleList from '@/components/cart/ArticleList';
import { BarcodeDisplayModal } from '@/components/cart/BarcodeDisplayModal';
import { ScanStatusIndicator } from '@/components/cart/ScanStatusIndicator';
import { Button, showError, Text, useModal, View } from '@/components/ui';
import { translate } from '@/lib/i18n';
import { type Article, useCashierStore } from '@/lib/state';

export default function CashierPaymentPage() {
  const clientArticlesByBarcode = useCashierStore.use.clientArticlesByBarcode();
  const scannedArticles = useCashierStore.use.scannedBarcodes();
  const clearScannedArticles = useCashierStore.use.clearScannedArticles();

  const createArticlesMutation = useCreateArticles();

  const [selectedArticle, setSelectedArticle] = React.useState<Article | null>(
    null
  );
  const barcodeModal = useModal();

  // Clear scanned articles on mount to start fresh
  React.useEffect(() => {
    clearScannedArticles();
  }, [clearScannedArticles]);

  const clientArticleIds = clientArticlesByBarcode
    ? Object.keys(clientArticlesByBarcode)
    : [];

  const allArticlesScanned =
    !clientArticlesByBarcode || clientArticleIds.length === 0
      ? false
      : clientArticleIds.every((barcode) => {
          const article = clientArticlesByBarcode[barcode];
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
    if (!clientArticlesByBarcode) return;

    createArticlesMutation.mutate(
      {
        client_id: useCashierStore.getState().clientId!,
        articles: Object.values(clientArticlesByBarcode).flatMap((article) =>
          new Array<CreateArticlesRequestBody['articles'][number]>(
            article.quantity
          ).fill({
            barcode: article.barcode,
            name: article.productLabel ?? '',
            img_url: article.productThumbUrl,
            thumb_url: article.productThumbUrl,
            brand_label: article.productBrand,
          })
        ),
      },
      {
        onSuccess: () => {
          useCashierStore.getState().clear();
          showMessage({
            message: translate('pages.payment.client.success-title'),
            description: translate('pages.payment.client.success-message'),
            type: 'success',
            duration: 4000,
          });
        },
        //@ts-expect-error. TODO: fix errors
        onError: showError,
      }
    );
  };

  if (clientArticlesByBarcode === null) {
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
        articlesByBarcode={clientArticlesByBarcode}
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
            {translate('pages.payment.client.validate')}
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
