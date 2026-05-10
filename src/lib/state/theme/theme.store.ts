import { Appearance, type ColorSchemeName } from 'react-native';
import { create } from 'zustand';

import { createSelectors } from '../utils';
import { getTheme, persistTheme } from './utils';

export type ColorSchemeType = 'light' | 'dark' | 'system';

type ThemeState = {
  selectedTheme: ColorSchemeType;
  setSelectedTheme: (theme: ColorSchemeType) => void;
  hydrateTheme: () => void;
};

// Read theme synchronously at module load to avoid flash on first render
const _storedTheme = getTheme();
const _initialTheme: ColorSchemeType =
  _storedTheme && _storedTheme !== ''
    ? (_storedTheme as ColorSchemeType)
    : 'light';
Appearance.setColorScheme(_initialTheme as ColorSchemeName);
if (!_storedTheme || _storedTheme === '') {
  persistTheme('light');
}

export const themeStore = create<ThemeState>((set) => ({
  selectedTheme: _initialTheme,
  setSelectedTheme: (theme: ColorSchemeType) => {
    persistTheme(theme);
    set({ selectedTheme: theme });
    if (theme !== 'system') {
      Appearance.setColorScheme(theme);
    } else {
      Appearance.setColorScheme(null);
    }
  },
  hydrateTheme: () => {
    const theme = getTheme();
    if (theme && theme !== '') {
      set({ selectedTheme: theme as ColorSchemeType });
      Appearance.setColorScheme(theme as ColorSchemeName);
    } else {
      persistTheme('light');
      set({ selectedTheme: 'light' });
    }
  },
}));

export const useThemeStore = createSelectors(themeStore);
