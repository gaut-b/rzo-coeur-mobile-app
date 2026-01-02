import { Stack } from 'expo-router';
import * as React from 'react';

import { Button, Text, View } from '@/components/ui';
import { translate } from '@/lib/i18n';
import { useCashierStore } from '@/lib/state';

export default function CashierPaymentPage() {
  const clientArticles = useCashierStore.use.clientArticles();

  if (clientArticles === null) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>TODO: add translation</Text>
      </View>
    );
  }

  return (
    <View
      id="carousel-component"
      className="flex size-full flex-col justify-between"
    >
      <Stack.Screen
        options={{
          title: translate('pages.payment.title'),
        }}
      />
      <View className="h-full shrink"></View>
      <Button variant="secondary" className="m-20 h-20">
        <Text className="ml-2 flex-1 text-center font-bold text-white">
          {translate('pages.payment.validate')}
        </Text>
      </Button>
    </View>
  );
}
