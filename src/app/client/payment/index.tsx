import { Redirect, Stack } from 'expo-router';

import CartQrCode from '@/components/cart/CartQrCode';
import { FocusAwareStatusBar, Text, View } from '@/components/ui';
import { useRoleProtectedRoute } from '@/lib/hooks';
import { translate } from '@/lib/i18n';
import { useAuthStore, useBasketStore } from '@/lib/state';
import {
  type ClientBasketQRCodeType,
  QR_FORMAT_CLIENT_BASKET,
} from '@/lib/types';

export default function ClientPaymentPage() {
  useRoleProtectedRoute(['CLIENT']);
  const user = useAuthStore.use.user();
  const articlesByBarcode = useBasketStore.use.articlesByBarcode();

  if (!user) {
    return <Redirect href="/sign-in" />;
  }

  const qrValue: ClientBasketQRCodeType = {
    type: QR_FORMAT_CLIENT_BASKET,
    clientId: user.pk.toString(),
    articles: articlesByBarcode,
  };

  return (
    <View className="flex h-full items-center justify-center gap-4">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <FocusAwareStatusBar />
      <View>
        <Text className="text-center text-3xl tracking-tight">
          {translate('pages.payment.client.content')}
        </Text>
      </View>
      <View className="flex-2">
        <CartQrCode size={300} qrCodeValue={JSON.stringify(qrValue)} />
      </View>
    </View>
  );
}
