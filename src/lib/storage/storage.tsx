import * as ExpoCrypto from 'expo-crypto';
import * as SecureStore from 'expo-secure-store';
import { MMKV } from 'react-native-mmkv';

const ENCRYPTION_KEY_ID = 'mmkv-encryption-key';

function getOrCreateEncryptionKey(): string {
  let key = SecureStore.getItem(ENCRYPTION_KEY_ID);
  if (!key) {
    const bytes = ExpoCrypto.getRandomBytes(32);
    key = Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('');
    SecureStore.setItem(ENCRYPTION_KEY_ID, key);
  }
  return key;
}

export const storage = new MMKV({
  id: 'rzo-coeur-storage',
  encryptionKey: getOrCreateEncryptionKey(),
});

export function getItem<T>(key: string): T | null {
  const value = storage.getString(key);
  return value ? JSON.parse(value) || null : null;
}

export function setItem<T>(key: string, value: T) {
  storage.set(key, JSON.stringify(value));
}

export function removeItem(key: string) {
  storage.delete(key);
}
