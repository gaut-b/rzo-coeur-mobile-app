import { useRouter } from 'expo-router';
import React from 'react';

import { Cover } from '@/components/cover';
import {
  Button,
  FocusAwareStatusBar,
  SafeAreaView,
  Text,
  View,
} from '@/components/ui';
import { useIsFirstTime } from '@/lib/hooks';
export default function Onboarding() {
  const [_, setIsFirstTime] = useIsFirstTime();
  const router = useRouter();
  return (
    <View className="flex h-full items-center  justify-center">
      <FocusAwareStatusBar />
      <View className="w-full flex-1">
        <Cover />
      </View>
      <View className="justify-end ">
        <Text className="my-3 text-center text-5xl font-bold">
          Les Réseaux du Cœur
        </Text>
        <Text className="mb-2 text-center text-lg text-gray-600">
          Faites un geste solidaire en offrant des produits à ceux qui en ont
          besoin
        </Text>

        <Text className="my-1 pt-6 text-left text-lg">
          🛒 Achetez des produits en magasin{' '}
        </Text>
        <Text className="my-1 text-left text-lg">
          🤝 Laissez-les disponibles pour des bénéficiaires
        </Text>
        <Text className="my-1 text-left text-lg">
          💚 Contribuez à la solidarité alimentaire
        </Text>
        <Text className="my-1 text-left text-lg">
          📱 Gérez tout depuis l'application
        </Text>
      </View>
      <SafeAreaView className="mt-6">
        <Button
          label="Commencer"
          onPress={() => {
            setIsFirstTime(false);
            router.replace('/sign-in');
          }}
        />
      </SafeAreaView>
    </View>
  );
}
