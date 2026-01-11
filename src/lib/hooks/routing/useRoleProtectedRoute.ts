import { useRouter } from 'expo-router';

import type { Role } from '@/lib/state';
import { useAuthStore } from '@/lib/state';

export const useRoleProtectedRoute = (authorizedRoles: Role[]) => {
  const router = useRouter();
  const status = useAuthStore((state) => state.status);
  const user = useAuthStore((state) => state.user);

  if (status === 'LOGGED_IN' && user != null && authorizedRoles.length > 0) {
    const userRole = user.role;
    if (!authorizedRoles.includes(userRole)) {
      router.push('/'); // Redirect to home if role is not authorized
    }
  }
};
