import { Appearance, type ColorSchemeName } from 'react-native';
import { create } from 'zustand';

import type { ColorSchemeType } from '@/lib/hooks';

import { createSelectors } from '../utils';
import { getTheme, persistTheme } from './utils';

type ThemeState = {
  selectedTheme: ColorSchemeType;
  setSelectedTheme: (theme: ColorSchemeName) => void;
  hydrateTheme: () => void;
};

export const themeStore = create<ThemeState>((set) => ({
  selectedTheme: null,
  setSelectedTheme: (theme: ColorSchemeName) => {
    persistTheme(theme);
    set({ selectedTheme: theme });
    Appearance.setColorScheme(theme);
  },
  hydrateTheme: () => {
    const theme = getTheme();
    if (theme && theme !== '') {
      Appearance.setColorScheme(theme as ColorSchemeName);
    } else {
      // const userTheme = Appearance.getColorScheme();
      persistTheme('light');
      set({ selectedTheme: 'light' });
    }
  },
}));

export const useThemeStore = createSelectors(themeStore);
