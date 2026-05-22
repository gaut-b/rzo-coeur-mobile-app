import type { Theme } from '@react-navigation/native';
import {
  DarkTheme as _DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';

import colors from '@/components/ui/colors';
import { useThemeStore } from '@/lib/state';

const DarkTheme: Theme = {
  ..._DarkTheme,
  colors: {
    ..._DarkTheme.colors,
    primary: colors.primary[300],
    background: colors.charcoal[950],
    text: colors.charcoal[100],
    border: colors.charcoal[500],
    card: colors.charcoal[850],
  },
};

const LightTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary[700],
    background: colors.cream,
    card: colors.primary[900],
    text: colors.white,
  },
};

export function useThemeConfig() {
  const selectedTheme = useThemeStore((state) => state.selectedTheme);

  return selectedTheme === 'dark' ? DarkTheme : LightTheme;
}
