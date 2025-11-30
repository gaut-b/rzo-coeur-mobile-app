import { getItem, removeItem, setItem } from '@/lib/storage';
const TOKEN_STORAGE_KEY = 'auth-token';

export type AuthTokenType = {
  access: string;
  refresh: string;
  access_expiration: string;
  refresh_expiration: string;
};

const isExpired = (expirationDate: string): boolean => {
  try {
    const currentTime = Date.now();
    const expDate = new Date(expirationDate);
    return expDate.getTime() < currentTime;
  } catch {
    return true;
  }
};

export const isAccessTokenExpired = (tokens: AuthTokenType): boolean => {
  return isExpired(tokens.access_expiration);
};

export const isRefreshTokenExpired = (tokens: AuthTokenType): boolean => {
  return isExpired(tokens.refresh_expiration);
};

export const getTokens = () => getItem<AuthTokenType>(TOKEN_STORAGE_KEY);
export const removeTokens = () => removeItem(TOKEN_STORAGE_KEY);
export const persistTokens = (value: AuthTokenType) =>
  setItem<AuthTokenType>(TOKEN_STORAGE_KEY, value);
