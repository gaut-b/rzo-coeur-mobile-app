import { Redirect, Stack } from 'expo-router';
import { useColorScheme } from 'nativewind';

import CartQrCode from '@/components/cart/CartQrCode';
import { FocusAwareStatusBar, SafeAreaView, Text, View } from '@/components/ui';
import { CashierIcon } from '@/components/ui/icons/cashier-icon';
import { useRoleProtectedRoute } from '@/lib/hooks';
import { translate } from '@/lib/i18n';
import { useAuthStore, useRecipientCartStore } from '@/lib/state';
import {
  QR_FORMAT_RECIPIENT_BASKET,
  type RecipientBasketQRCodeType,
} from '@/lib/types';

export default function RecipientPaymentPage() {
  useRoleProtectedRoute(['RECIPIENT']);
  const user = useAuthStore.use.user();
  const currentCartId = useRecipientCartStore.use.currentCartId();
  const scannedArticles = useRecipientCartStore.use.scannedArticles();
  const { colorScheme } = useColorScheme();

  if (!user) {
    return <Redirect href="/sign-in" />;
  }

  if (!currentCartId) {
    return <Redirect href="/" />;
  }

  const qrValue: RecipientBasketQRCodeType = {
    type: QR_FORMAT_RECIPIENT_BASKET,
    clientId: user.pk.toString(),
    cartId: currentCartId,
  };

  const articleCount = Object.keys(scannedArticles).length;

  return (
    <SafeAreaView className="flex-1" edges={['bottom']}>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: translate('pages.payment.title'),
        }}
      />
      <FocusAwareStatusBar />
      <View className="flex-1 items-center justify-center gap-8 px-6">
        {/* Instructions */}
        <View className="items-center gap-3">
          <CashierIcon
            fill={colorScheme === 'dark' ? 'white' : 'black'}
            width={48}
            height={48}
          />
          <Text className="text-center text-2xl font-bold tracking-tight">
            {translate('pages.payment.recipient.content')}
          </Text>
          <View className="rounded-full bg-primary-100 px-4 py-1.5 dark:bg-primary-900">
            <Text className="text-sm font-semibold text-primary-700 dark:text-primary-300">
              {translate('pages.basket.checkout-count', {
                count: articleCount,
              })}
            </Text>
          </View>
        </View>

        {/* QR Code card */}
        <View className="rounded-3xl bg-white p-6 shadow-lg dark:bg-neutral-900">
          <CartQrCode size={260} qrCodeValue={JSON.stringify(qrValue)} />
        </View>
      </View>
    </SafeAreaView>
  );
}
