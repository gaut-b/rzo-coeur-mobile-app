import { useEffect, useRef } from 'react';
import { AppState } from 'react-native';

/**
 * Manages a ref-based lock to prevent duplicate QR/barcode scans.
 * The lock is reset automatically when the app returns to the foreground.
 *
 * @returns A ref whose `.current` value controls whether scanning is allowed.
 *          Set to `true` to lock (ignore subsequent scans), `false` to unlock.
 */
export function useQrLock() {
  const qrLock = useRef(false);
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        qrLock.current = false;
      }
      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return qrLock;
}
