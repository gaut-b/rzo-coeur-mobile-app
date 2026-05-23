import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';

import { ShopDetail } from '@/components/shops/ShopDetail';
import { useGetShop } from '@/lib/hooks';

export default function ShopDetailPage() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const shopId = Number.parseInt(id, 10);
  const { data: shop } = useGetShop(shopId);

  return (
    <>
      <Stack.Screen options={{ title: shop?.name ?? '' }} />
      <ShopDetail shopId={shopId} />
    </>
  );
}
