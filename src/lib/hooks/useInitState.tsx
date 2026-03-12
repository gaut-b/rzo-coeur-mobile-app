import { useEffect } from 'react';

import { useAuthStore } from '@/lib/state';

import { useGetUser } from './api/user/useGetUser';

export function useInitState() {
  const status = useAuthStore.use.status();
  const currentUser = useAuthStore.use.user();
  const hydrateAuthStore = useAuthStore.use.hydrate();
  const setUser = useAuthStore.use.setUser();

  const shouldFetchUser = currentUser == null && status === 'LOGGED_IN';

  const { data: fetchedUser, isSuccess } = useGetUser(shouldFetchUser);

  useEffect(() => {
    if (isSuccess && fetchedUser && currentUser == null) {
      setUser({
        ...fetchedUser,
        firstName: fetchedUser.first_name,
        lastName: fetchedUser.last_name,
      });
    }
  }, [isSuccess, fetchedUser, currentUser, setUser]);

  useEffect(() => {
    if (status === 'NOT_INITIALIZED') {
      hydrateAuthStore();
    }
  }, [hydrateAuthStore, status]);
}
