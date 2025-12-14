import React from 'react';
import { ActivityIndicator, View } from 'react-native';

interface LoaderProps {
  size?: 'small' | 'large';
  color?: string;
}

export const Loader = ({ size = 'large', color = '#10b981' }: LoaderProps) => {
  return (
    <View className="flex-1 items-center justify-center">
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};
