import { useCameraPermissions } from 'expo-camera';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';

import { ArticleCard } from '@/components/cart/ArticleCard';
import {
  Button,
  FocusAwareStatusBar,
  Loader,
  ScrollView,
  showError,
  Text,
  View,
} from '@/components/ui';
import { CheckCircleIcon } from '@/components/ui/icons';
import { type CartArticle, useGetRecipientCarts } from '@/lib/hooks';
import { translate } from '@/lib/i18n';
import { useRecipientCartStore } from '@/lib/state';
import { RECIPIENT_ROOT_PATH } from '@/lib/types';

export default function CartDetailPage() {
  const { id } = useLocalSearchParams<{
    id: string;
  }>();
  const router = useRouter();
  const [permission, requestPermission] = useCameraPermissions();
  const isPermissionGranted = Boolean(permission?.granted);

  const scannedArticles = useRecipientCartStore.use.scannedArticles();
  const setCartId = useRecipientCartStore.use.setCartId();

  const {
    data: cartListResponse,
    isLoading,
    isError,
    error,
  } = useGetRecipientCarts();

  React.useEffect(() => {
    if (isError) {
      showError(error);
    }
  }, [isError, error]);

  // Memoize the parsed cart ID
  const numericCartId = React.useMemo(
    () => (id ? Number.parseInt(id, 10) : undefined),
    [id]
  );

  // Find the specific cart (memoized to avoid repeated linear searches on every render)
  const cart = React.useMemo(
    () =>
      typeof numericCartId === 'number'
        ? cartListResponse?.results.find((c) => c.id === numericCartId)
        : undefined,
    [numericCartId, cartListResponse]
  );
  // Set the current cart ID when component mounts or cart ID changes
  React.useEffect(() => {
    if (id) {
      setCartId(id);
    }
  }, [id, setCartId]);

  const handleScanArticle = (article: CartArticle) => {
    if (isPermissionGranted) {
      // Navigate to scanner with article info
      router.push({
        pathname: `/${RECIPIENT_ROOT_PATH}/scanner`,
        params: {
          articleId: article.id.toString(),
          expectedBarcode: article.barcode.toString(),
          expectedArticleName: article.name,
        },
      });
    } else {
      requestPermission();
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <View className="flex-1 items-center justify-center p-4">
        <FocusAwareStatusBar />
        <Text className="text-center text-lg text-neutral-600 dark:text-neutral-400">
          {translate('errors.generic.unknown')}
        </Text>
      </View>
    );
  }

  if (!cart) {
    return (
      <View className="flex-1 items-center justify-center p-4">
        <FocusAwareStatusBar />
        <Text className="text-center text-lg text-neutral-600 dark:text-neutral-400">
          {translate('pages.recipient.cart-not-found')}
        </Text>
      </View>
    );
  }

  const allArticlesScanned =
    cart.articles.length > 0 &&
    cart.articles.every((article) => article.id in scannedArticles);

  return (
    <View className="flex-1">
      <FocusAwareStatusBar />
      <ScrollView className="flex-1 bg-neutral-50 dark:bg-neutral-900">
        <View className="p-4">
          {/* Cart header */}
          <View className="mb-6">
            <Text className="mb-2 text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              {cart.shop_name}
            </Text>
            <Text className="text-base text-neutral-600 dark:text-neutral-400">
              {cart.articles.length} {translate('pages.history.articles')}
            </Text>
            {Object.keys(scannedArticles).length > 0 && (
              <Text className="mt-2 text-sm text-success-600 dark:text-success-400">
                {Object.keys(scannedArticles).length} / {cart.articles.length}{' '}
                {translate('pages.recipient.scanned-articles')}
              </Text>
            )}
          </View>

          {/* Articles list */}
          {cart.articles.map((article) => {
            const isScanned = article.id in scannedArticles;
            return (
              <ArticleCard
                key={article.id}
                article={article}
                variant={isScanned ? 'success' : 'default'}
                renderRight={() =>
                  isScanned ? (
                    <View className="text-success-500 dark:text-success-400">
                      <CheckCircleIcon
                        fill="currentColor"
                        width={32}
                        height={32}
                      />
                    </View>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      onPress={() => handleScanArticle(article)}
                    >
                      <Text className="text-sm font-medium">
                        {translate('pages.recipient.scan-button')}
                      </Text>
                    </Button>
                  )
                }
              />
            );
          })}

          {/* Checkout button */}
          {allArticlesScanned && (
            <Button
              variant="default"
              size="lg"
              className="mt-6 bg-success-600"
              onPress={() => router.push(`/${RECIPIENT_ROOT_PATH}/payment`)}
            >
              <Text className="font-semibold text-white">
                {translate('pages.basket.checkout')}
              </Text>
            </Button>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
