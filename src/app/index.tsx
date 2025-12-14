import { Redirect, SplashScreen } from 'expo-router';
import React, { useEffect } from 'react';

import { useInitState } from '@/lib/hooks';
import { useAuthStore } from '@/lib/state';

export default function Index() {
  useInitState();
  const user = useAuthStore((state) => state.user);
  const status = useAuthStore((state) => state.status);

  useEffect(() => {
    // Hide splash screen after initialization
    if (status !== 'NOT_INITIALIZED') {
      setTimeout(() => {
        SplashScreen.hideAsync();
      }, 500);
    }
  }, [status]);

  if (status === 'NOT_INITIALIZED') {
    return null;
  }

  if (status === 'LOGGED_OUT') {
    return <Redirect href="/sign-in" />;
  }

  // Wait for user to be fetched after hydration
  if (status === 'LOGGED_IN' && user === null) {
    return null;
  }

  // Role-based redirection
  if (user?.role === 'CLIENT') {
    return <Redirect href="/(client)" />;
  } else if (user?.role === 'CASHIER') {
    return <Redirect href="/(cashier)" />;
  } else if (user?.role === 'RECIPIENT') {
    return <Redirect href="/(recipient)" />;
  }

  // Fallback if role is not recognized
  return <Redirect href="/sign-in" />;
}
