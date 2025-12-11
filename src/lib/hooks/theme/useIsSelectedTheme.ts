import React from 'react';
import { Appearance } from 'react-native';
import { useMMKVString } from 'react-native-mmkv';

import { storage } from '../../storage';

const SELECTED_THEME = 'SELECTED_THEME';
export type ColorSchemeType = 'light' | 'dark' | null | undefined;
/**
 * this hooks should only be used while selecting the theme
 * This hooks will return the selected theme which is stored in MMKV
 * selectedTheme should be one of the following values 'light', 'dark' or 'system'
 * don't use this hooks if you want to use it to style your component based on the theme use useColorScheme from nativewind instead
 *
 */
export const useSelectedTheme = () => {
  const [theme, _setTheme] = useMMKVString(SELECTED_THEME, storage);

  const setSelectedTheme = React.useCallback(
    (t: ColorSchemeType) => {
      Appearance.setColorScheme(t);
      _setTheme(t ?? '');
    },
    [_setTheme]
  );

  const selectedTheme = (theme ?? 'system') as ColorSchemeType;
  return { selectedTheme, setSelectedTheme } as const;
};
// to be used in the root file to load the selected theme from MMKV
export const loadSelectedTheme = () => {
  const theme = storage.getString(SELECTED_THEME);
  if (theme !== undefined) {
    Appearance.setColorScheme(theme as ColorSchemeType);
  }
};
