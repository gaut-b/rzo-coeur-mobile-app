import { Stack } from 'expo-router';
import * as React from 'react';

import { ArticleDetail } from '@/components/cart/ArticleDetail';
import ArticleList from '@/components/cart/ArticleList';
import { BarcodeDisplayModal } from '@/components/cart/BarcodeDisplayModal';
import { ScanStatusIndicator } from '@/components/cart/ScanStatusIndicator';
import { Button, Text, useModal, View } from '@/components/ui';
import { translate, type TxKeyPath } from '@/lib/i18n';
import { type Article, useCashierStore } from '@/lib/state';

interface PaymentValidationProps {
  readonly articlesByBarcode: Record<string, Article> | null;
  readonly onValidatePayment: () => void;
  readonly validateButtonLabel: string;
  readonly emptyStateMessage?: TxKeyPath;
}

export function PaymentValidation({
  articlesByBarcode,
  onValidatePayment,
  validateButtonLabel,
  emptyStateMessage = 'pages.recipient.empty-baskets',
}: PaymentValidationProps) {
  const scannedArticles = useCashierStore.use.scannedBarcodes();
  const clearScannedArticles = useCashierStore.use.clearScannedArticles();

  const [selectedArticle, setSelectedArticle] = React.useState<Article | null>(
    null
  );
  const barcodeModal = useModal();

  // Calculate if all articles are scanned
  const articleIds = articlesByBarcode ? Object.keys(articlesByBarcode) : [];
  const allArticlesScanned =
    !articlesByBarcode || articleIds.length === 0
      ? false
      : articleIds.every((barcode) => {
          const article = articlesByBarcode[barcode];
          const scannedCount = scannedArticles[barcode] || 0;
          return scannedCount >= article.quantity;
        });

  // Clear scanned articles on mount to start fresh
  React.useEffect(() => {
    clearScannedArticles();
  }, [clearScannedArticles]);

  const onScanSuccess = () => {
    barcodeModal.dismiss();
    setSelectedArticle(null);
  };

  const onArticleClick = (article: Article) => {
    setSelectedArticle(article);
    barcodeModal.present();
  };

  if (articlesByBarcode === null) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>{translate(emptyStateMessage)}</Text>
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
        articlesByBarcode={articlesByBarcode}
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
          <Text className="font-bold text-white">{validateButtonLabel}</Text>
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
