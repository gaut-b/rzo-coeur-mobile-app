import { Stack } from 'expo-router';
import QRCode from 'react-native-qrcode-svg';

import { FocusAwareStatusBar, Text, View } from '@/components/ui';
import { QR_FORMAT_RECIPIENT_CART } from '@/lib/constants';
import { translate } from '@/lib/i18n';
import {
  useAuthStore,
  useBasketStore,
  useRecipientCartStore,
} from '@/lib/state';

export const PaymentPage = () => {
  const role = useAuthStore.use.user()?.role;
  const currentCartId = useRecipientCartStore.use.currentCartId();
  let logoFromFile = require('../../components/ui/icons/icon.png');
  const { articles: articlesById } = useBasketStore();

  // Generate QR code value based on role
  let qrValue: string;
  if (role === 'RECIPIENT' && currentCartId) {
    // Recipient: use cart ID format
    qrValue = `${QR_FORMAT_RECIPIENT_CART}${currentCartId}`;
  } else {
    // Client: use articles basket format
    qrValue = JSON.stringify(Object.fromEntries(articlesById));
  }

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
          {translate(
            `pages.payment.content-${role === 'RECIPIENT' ? 'recipient' : 'client'}`
          )}
        </Text>
      </View>
      <View className="flex-2">
        <QRCode size={300} value={qrValue} logo={logoFromFile} />
      </View>
    </View>
  );
};

export default PaymentPage;
