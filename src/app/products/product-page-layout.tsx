import { Stack } from 'expo-router';
import { type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

import { ActivityIndicator, FocusAwareStatusBar, View } from '@/components/ui';

type ProductPageLayoutProps = {
  children?: ReactNode;
  showActivityIndicator?: boolean;
  className?: string;
};

const ProductPageLayout = ({
  children,
  showActivityIndicator = false,
  className,
}: ProductPageLayoutProps) => {
  return (
    <View className={twMerge(className, 'flex-1 p-3')}>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: '',
        }}
      />
      <FocusAwareStatusBar />
      {showActivityIndicator && <ActivityIndicator />}
      {children}
    </View>
  );
};

export default ProductPageLayout;
