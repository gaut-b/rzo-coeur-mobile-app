import React, { useEffect, useRef, useState } from 'react';
import { TextInput } from 'react-native';
import {
  BarcodeCreatorView,
  BarcodeFormat,
} from 'react-native-barcode-creator';
import { showMessage } from 'react-native-flash-message';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button, Image, Modal, ScrollView, Text, View } from '@/components/ui';
import { translate } from '@/lib/i18n';
import { type Article, useCashierStore } from '@/lib/state';

interface BarcodeDisplayModalProps {
  article: Article | null;
  onScanComplete: () => void;
}

export const BarcodeDisplayModal = React.forwardRef<
  React.ComponentRef<typeof Modal>,
  BarcodeDisplayModalProps
>(({ article, onScanComplete }, ref) => {
  const scanArticle = useCashierStore.use.scanArticle();
  const scannedBarcodes = useCashierStore.use.scannedBarcodes();
  const [scannedCode, setScannedCode] = useState('');
  const scannerInputRef = useRef<TextInput>(null);
  const insets = useSafeAreaInsets();

  // Focus the hidden input when modal opens
  useEffect(() => {
    if (article) {
      setTimeout(() => {
        scannerInputRef.current?.focus();
      }, 100);
    }
  }, [article]);

  const handlePhysicalScan = (code: string) => {
    if (!article?.barcode) return;

    const trimmedCode = code.trim();

    if (trimmedCode === String(article.barcode)) {
      // Success - mark as scanned
      scanArticle(article.barcode);

      // Check if all items are now scanned
      const currentCount = (scannedBarcodes[article.barcode] || 0) + 1;
      if (currentCount >= article.quantity) {
        onScanComplete();
      }
    } else {
      // Mismatch - show error
      showMessage({
        message: translate('pages.scanner.barcode-mismatch-title'),
        description: translate('pages.scanner.barcode-mismatch-message', {
          scannedBarcode: trimmedCode,
          expectedBarcode: article.barcode,
        }),
        type: 'danger',
        duration: 4000,
      });
      setScannedCode('');
      scannerInputRef.current?.focus();
    }
  };

  const onScanValidationClick = () => {
    if (!article?.barcode) return;

    scanArticle(article.barcode);

    // Check if all items are now scanned
    const currentCount = (scannedBarcodes[article.barcode] || 0) + 1;
    if (currentCount >= article.quantity) {
      onScanComplete();
    }
  };

  return (
    <Modal
      ref={ref}
      snapPoints={['85%']}
      title={translate('pages.payment.title')}
    >
      {!article ? (
        <View className="flex-1 items-center justify-center px-4">
          <Text className="text-neutral-500">
            {translate('common.loading')}
          </Text>
        </View>
      ) : (
        <ScrollView
          className="flex-1 px-4"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: insets.bottom + 80,
          }}
        >
          <View className="items-center">
            {/* Hidden input for physical scanner */}
            <TextInput
              ref={scannerInputRef}
              value={scannedCode}
              onChangeText={setScannedCode}
              onSubmitEditing={() => {
                handlePhysicalScan(scannedCode);
                setScannedCode('');
              }}
              showSoftInputOnFocus={false}
              style={{ position: 'absolute', width: 0, height: 0, opacity: 0 }}
            />

            {/* Article image */}
            {article.productThumbUrl && (
              <View className="mb-4 h-32 w-32 overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-700">
                <Image
                  className="h-full w-full"
                  contentFit="contain"
                  source={{ uri: article.productThumbUrl }}
                />
              </View>
            )}

            {/* Article name */}
            <Text className="mb-2 text-center text-lg font-semibold text-neutral-900 dark:text-neutral-100">
              {article.productLabel}
            </Text>

            {/* Brand */}
            {article.productBrand && (
              <Text className="mb-6 text-center text-sm text-neutral-600 dark:text-neutral-400">
                {article.productBrand}
              </Text>
            )}

            {/* Barcode display */}
            <View className="mb-4 items-center rounded-lg bg-white p-4">
              <BarcodeCreatorView
                value={String(article.barcode ?? '')}
                format={BarcodeFormat.EAN13}
                background="#FFFFFF"
                foregroundColor="#000000"
                style={{ width: 300, height: 100 }}
              />
              <Text className="mt-2 text-sm text-neutral-600">
                {article.barcode}
              </Text>
            </View>

            {/* Scan progress indicator */}
            {article.quantity > 1 && (
              <View className="mb-4 rounded-lg bg-blue-50 px-4 py-3 dark:bg-blue-900/30">
                <Text className="text-center text-lg font-semibold text-blue-600 dark:text-blue-400">
                  {scannedBarcodes[article.barcode] || 0} / {article.quantity}
                </Text>
                <Text className="mt-1 text-center text-xs text-blue-600 dark:text-blue-400">
                  {translate('cashier.articles-scanned')}
                </Text>
              </View>
            )}

            <Text className="mt-4 mb-6 text-center text-sm text-neutral-500 dark:text-neutral-400">
              {translate('pages.payment.cashier.content')}
            </Text>

            {/* Validation button */}
            <View className="w-full">
              <Button
                variant="secondary"
                className="h-12"
                onPress={onScanValidationClick}
              >
                <Text className="font-bold text-white">
                  {translate('cashier.scan')}
                </Text>
              </Button>
            </View>
          </View>
        </ScrollView>
      )}
    </Modal>
  );
});

BarcodeDisplayModal.displayName = 'BarcodeDisplayModal';
