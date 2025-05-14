import { Stack } from 'expo-router';
import QRCode from 'react-native-qrcode-svg';

import { FocusAwareStatusBar, Text, View } from '@/components/ui';
import { translate } from '@/lib';
import { useBasket } from '@/lib/state/basket/basket.store';
export const PaymentPage = () => {
  let logoFromFile = require('../../components/ui/icons/icon.png');
  const { articles: articlesById } = useBasket();
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
          {translate('pages.payment.content')}
        </Text>
      </View>
      <View className="flex-2">
        <QRCode
          size={300}
          value={JSON.stringify(Object.fromEntries(articlesById))}
          logo={logoFromFile}
        />
      </View>
    </View>
  );
};

export default PaymentPage;
