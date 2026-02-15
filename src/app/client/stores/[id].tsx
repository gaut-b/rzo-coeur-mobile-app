import { useLocalSearchParams } from 'expo-router';
import React from 'react';

import { ShopDetail } from '@/components/shops/ShopDetail';

export default function ShopDetailPage() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const shopId = Number.parseInt(id, 10);

  return <ShopDetail shopId={shopId} />;
}
