import { useMutation } from '@tanstack/react-query';

import { rzoApiClient } from '@/lib/http';

type ResetPasswordRequestBody = {
  email: string;
};

const resetPasswordRequest = async (
  requestBody: ResetPasswordRequestBody
): Promise<void> => {
  await rzoApiClient.post('api/auth/password/reset', {
    json: requestBody,
  });
};

export function useResetPassword() {
  return useMutation({
    mutationFn: (requestBody: ResetPasswordRequestBody) =>
      resetPasswordRequest(requestBody),
  });
}
