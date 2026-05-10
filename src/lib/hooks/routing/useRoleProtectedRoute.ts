import { useRouter } from 'expo-router';
import { useEffect } from 'react';

import type { Role } from '@/lib/state';
import { useAuthStore } from '@/lib/state';

export const useRoleProtectedRoute = (authorizedRoles: Role[]) => {
  const router = useRouter();
  const status = useAuthStore((state) => state.status);
  const userRole = useAuthStore((state) => state.user?.role);

  useEffect(() => {
    if (status === 'LOGGED_OUT') {
      router.replace('/sign-in');
      return;
    }
    if (
      status === 'LOGGED_IN' &&
      userRole != null &&
      authorizedRoles.length > 0
    ) {
      if (!authorizedRoles.includes(userRole)) {
        router.replace('/');
      }
    }
    // authorizedRoles is intentionally omitted: callers always pass static literals
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, userRole, router]);
};
