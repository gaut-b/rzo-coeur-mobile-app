import { useMutation } from '@tanstack/react-query';

import { rzoApiClient } from '@/lib/http';

type SignUpRequestBody = {
  email: string;
  password1: string;
  password2: string;
  first_name: string;
  last_name: string;
};

const signUpRequest = async (requestBody: SignUpRequestBody): Promise<void> => {
  return await rzoApiClient
    .post('api/auth/registration', {
      json: requestBody,
    })
    .json();
};

export function useSignUp() {
  return useMutation({
    mutationFn: (requestBody: SignUpRequestBody) => signUpRequest(requestBody),
  });
}
