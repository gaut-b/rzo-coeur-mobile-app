import { useQuery } from '@tanstack/react-query';

import { authenticatedRzoApiClient } from '@/lib/http';
import type { Role } from '@/lib/state';

type GetUserRequestResponse = {
  pk: number;
  email: string;
  first_name: string;
  last_name: string;
  role: Role;
};

const getUserRequest = async (): Promise<GetUserRequestResponse> => {
  return await authenticatedRzoApiClient
    .get('api/auth/user')
    .json<GetUserRequestResponse>();
};

export const useGetUser = (shouldFetch: boolean = false) =>
  useQuery({
    queryKey: ['user'],
    queryFn: async () => getUserRequest(),
    enabled: shouldFetch,
  });
