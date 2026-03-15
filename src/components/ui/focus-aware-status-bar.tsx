import { useIsFocused } from '@react-navigation/native';
import * as React from 'react';
import { Platform } from 'react-native';
import { SystemBars } from 'react-native-edge-to-edge';

import { useThemeStore } from '@/lib/state';

type Props = { hidden?: boolean };
export const FocusAwareStatusBar = ({ hidden = false }: Props) => {
  const isFocused = useIsFocused();
  const colorScheme = useThemeStore((state) => state.selectedTheme);

  if (Platform.OS === 'web') return null;

  const statusBarStyle =
    colorScheme === 'light'
      ? 'dark'
      : colorScheme === 'dark'
        ? 'light'
        : undefined;

  return isFocused ? (
    <SystemBars style={statusBarStyle} hidden={hidden} />
  ) : null;
};
