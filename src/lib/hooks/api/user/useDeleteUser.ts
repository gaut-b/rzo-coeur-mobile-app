import { useMutation } from '@tanstack/react-query';

import { authenticatedRzoApiClient } from '@/lib/http';

const deleteUserRequest = async (): Promise<void> => {
  await authenticatedRzoApiClient.delete('api/auth/user');
};

export function useDeleteUser() {
  return useMutation({
    mutationFn: deleteUserRequest,
  });
}
