import { getItem, setItem } from '@/lib/storage';
export const THEME_STORAGE_KEY = 'theme';

export const getTheme = () => getItem<string>(THEME_STORAGE_KEY);

export const persistTheme = (theme: string) =>
  setItem<string>(THEME_STORAGE_KEY, theme ?? '');
