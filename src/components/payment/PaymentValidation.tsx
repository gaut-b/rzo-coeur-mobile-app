import { useCameraPermissions } from 'expo-camera';
import { Stack, usePathname, useRouter } from 'expo-router';
import * as React from 'react';

import {
  ArticleCard,
  transformArticleToCardProps,
} from '@/components/cart/ArticleCard';
import ArticleList from '@/components/cart/ArticleList';
import { BarcodeDisplayModal } from '@/components/cart/BarcodeDisplayModal';
import { ScanStatusIndicator } from '@/components/cart/ScanStatusIndicator';
import {
  Button,
  showErrorMessage,
  Text,
  useModal,
  View,
} from '@/components/ui';
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
  const router = useRouter();
  const pathname = usePathname();
  const [permission, requestPermission] = useCameraPermissions();
  const isPermissionGranted = Boolean(permission?.granted);
  const scannedArticles = useCashierStore.use.scannedBarcodes();
  const clearScannedArticles = useCashierStore.use.clearScannedArticles();

  // Auto-detect scan mode based on route: recipient uses camera, client uses barcode display
  const scanMode = pathname.includes('/recipient')
    ? 'camera'
    : 'barcode-display';

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

  // Clear scanned articles on mount to start fresh for barcode-display mode
  React.useEffect(() => {
    if (scanMode === 'barcode-display') {
      clearScannedArticles();
    }
  }, [clearScannedArticles, scanMode]);

  const onScanSuccess = () => {
    barcodeModal.dismiss();
    setSelectedArticle(null);
  };

  const openCameraScanner = (article: Article) => {
    router.push({
      pathname: '/cashier/scanner',
      params: {
        mode: 'article',
        expectedBarcode: String(article.barcode),
        expectedArticleName: article.productLabel ?? '',
      },
    });
  };

  const onArticleClick = async (article: Article) => {
    if (scanMode === 'camera') {
      if (isPermissionGranted) {
        openCameraScanner(article);
      } else {
        const permissionResult = await requestPermission();

        if (permissionResult.granted) {
          openCameraScanner(article);
        } else {
          showErrorMessage(translate('errors.generic.forbidden'));
        }
      }
      return;
    }

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
          headerShown: false,
        }}
      />

      {/* Article list with scan status */}
      <ArticleList
        articlesByBarcode={articlesByBarcode}
        renderItem={({ item }) => {
          const scannedCount = scannedArticles[item.barcode] || 0;
          const isScanned = scannedCount >= item.quantity;

          return (
            <ArticleCard
              article={transformArticleToCardProps(item)}
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

      {scanMode === 'barcode-display' && (
        <BarcodeDisplayModal
          ref={barcodeModal.ref}
          article={selectedArticle}
          onScanComplete={onScanSuccess}
        />
      )}
    </View>
  );
}
