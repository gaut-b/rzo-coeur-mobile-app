import { useRouter } from 'expo-router';
import React, { useCallback, useRef, useState } from 'react';
import {
  FlatList,
  type ListRenderItemInfo,
  useWindowDimensions,
  type ViewToken,
} from 'react-native';

import {
  Button,
  FocusAwareStatusBar,
  Image,
  SafeAreaView,
  Text,
  View,
} from '@/components/ui';
import { useIsFirstTime } from '@/lib/hooks';
import { translate } from '@/lib/i18n';

type StepId =
  | 'scan-client'
  | 'cashier-client'
  | 'recipient-notification'
  | 'scan-recipient'
  | 'cashier-recipient';

type StepField =
  | 'role'
  | 'title'
  | 'before'
  | 'highlight1'
  | 'between'
  | 'highlight2'
  | 'after';

const t = (id: StepId, field: StepField) =>
  translate(`onboarding.steps.${id}.${field}`);

type Step = {
  id: StepId;
  role: string;
  title: string;
  before: string;
  highlight1: string;
  between: string;
  highlight2: string;
  after: string;
  image: number;
};

const STEPS: Step[] = [
  {
    id: 'scan-client',
    role: t('scan-client', 'role'),
    title: t('scan-client', 'title'),
    before: t('scan-client', 'before'),
    highlight1: t('scan-client', 'highlight1'),
    between: t('scan-client', 'between'),
    highlight2: t('scan-client', 'highlight2'),
    after: t('scan-client', 'after'),
    image: require('../../assets/onboarding/scan_client.png'),
  },
  {
    id: 'cashier-client',
    role: t('cashier-client', 'role'),
    title: t('cashier-client', 'title'),
    before: t('cashier-client', 'before'),
    highlight1: t('cashier-client', 'highlight1'),
    between: t('cashier-client', 'between'),
    highlight2: t('cashier-client', 'highlight2'),
    after: t('cashier-client', 'after'),
    image: require('../../assets/onboarding/cashier_client.png'),
  },
  {
    id: 'recipient-notification',
    role: t('recipient-notification', 'role'),
    title: t('recipient-notification', 'title'),
    before: t('recipient-notification', 'before'),
    highlight1: t('recipient-notification', 'highlight1'),
    between: t('recipient-notification', 'between'),
    highlight2: t('recipient-notification', 'highlight2'),
    after: t('recipient-notification', 'after'),
    image: require('../../assets/onboarding/recipient.png'),
  },
  {
    id: 'scan-recipient',
    role: t('scan-recipient', 'role'),
    title: t('scan-recipient', 'title'),
    before: t('scan-recipient', 'before'),
    highlight1: t('scan-recipient', 'highlight1'),
    between: t('scan-recipient', 'between'),
    highlight2: t('scan-recipient', 'highlight2'),
    after: t('scan-recipient', 'after'),
    image: require('../../assets/onboarding/scan_recipient.png'),
  },
  {
    id: 'cashier-recipient',
    role: t('cashier-recipient', 'role'),
    title: t('cashier-recipient', 'title'),
    before: t('cashier-recipient', 'before'),
    highlight1: t('cashier-recipient', 'highlight1'),
    between: t('cashier-recipient', 'between'),
    highlight2: t('cashier-recipient', 'highlight2'),
    after: t('cashier-recipient', 'after'),
    image: require('../../assets/onboarding/cashier_recipient.png'),
  },
];

function OnboardingSlide({
  item,
  width,
}: Readonly<{ item: Step; width: number }>) {
  return (
    <View
      style={{ width }}
      className="flex-1 items-center justify-between bg-primary-700 px-6 pb-4 pt-12"
    >
      {/* Illustration */}
      <View className="flex-1 items-center justify-start py-6">
        <Image
          source={item.image}
          style={{ width: width * 0.85, height: width * 0.85 }}
          contentFit="contain"
        />
      </View>

      <View
        style={{ width }}
        className="flex-1 items-center justify-start bg-primary-700 px-6 pb-4 pt-12"
      >
        <Text className="text-sm font-semibold text-primary-300">
          {item.role}
        </Text>
        {/* Text block */}
        <View className="w-full pb-4">
          <Text className="mb-3 text-center text-2xl font-bold text-white">
            {item.title}
          </Text>
          <Text className="text-center text-base leading-6 text-white">
            {item.before}
            <Text className="font-semibold text-primary-300">
              {item.highlight1}
            </Text>
            {item.between}
            <Text className="font-semibold text-primary-300">
              {item.highlight2}
            </Text>
            {item.after}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default function Onboarding() {
  const [_, setIsFirstTime] = useIsFirstTime();
  const router = useRouter();
  const { width } = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState(0);
  const listRef = useRef<FlatList<Step>>(null);

  const handleFinish = useCallback(() => {
    setIsFirstTime(false);
    router.replace('/sign-in');
  }, [router, setIsFirstTime]);

  const onViewableItemsChanged = useCallback(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0 && viewableItems[0].index !== null) {
        setActiveIndex(viewableItems[0].index);
      }
    },
    []
  );

  const viewabilityConfig = useRef({ viewAreaCoveragePercentThreshold: 50 });

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Step>) => (
      <OnboardingSlide item={item} width={width} />
    ),
    [width]
  );

  return (
    <View className="flex-1 bg-primary-700">
      <FocusAwareStatusBar />

      <FlatList
        ref={listRef}
        data={STEPS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig.current}
        getItemLayout={(_, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
      />

      {/* Pagination dots */}
      <View className="flex-row items-center justify-center gap-2 py-4">
        {STEPS.map((step, index) => (
          <View
            key={step.id}
            className={`h-2 rounded-full ${
              index === activeIndex
                ? 'w-6 bg-primary-200'
                : 'w-2 bg-primary-500'
            }`}
          />
        ))}
      </View>

      {/* Commencer button — visible only on last slide */}
      <SafeAreaView className="px-6 pb-4">
        {activeIndex === STEPS.length - 1 ? (
          <Button
            label="Commencer"
            onPress={handleFinish}
            variant="outline"
            size="lg"
            textClassName="text-white font-bold"
          />
        ) : (
          <View className="h-12" />
        )}
      </SafeAreaView>
    </View>
  );
}
