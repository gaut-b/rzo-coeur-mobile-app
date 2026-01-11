import { Redirect, Stack } from 'expo-router';
import { useRoleProtectedRoute } from 'src/lib/hooks/routing';

import CartQrCode from '@/components/cart/CartQrCode';
import { FocusAwareStatusBar, Text, View } from '@/components/ui';
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

  return (
    <View className="flex h-full items-center justify-center gap-4">
      <Stack.Screen
        options={{
          title: translate('pages.payment.title'),
        }}
      />
      <FocusAwareStatusBar />
      <View>
        <Text className="text-center text-3xl tracking-tight">
          {translate('pages.payment.recipient.content')}
        </Text>
      </View>
      <View className="flex-2">
        <CartQrCode size={300} qrCodeValue={JSON.stringify(qrValue)} />
      </View>
    </View>
  );
}
