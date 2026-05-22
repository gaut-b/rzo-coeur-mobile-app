import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import colors from '@/components/ui/colors';

interface LoaderProps {
  size?: 'small' | 'large';
  color?: string;
}

export const Loader = ({
  size = 'large',
  color = colors.primary[900],
}: LoaderProps) => {
  return (
    <View className="flex-1 items-center justify-center">
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};
