import { useMutation } from '@tanstack/react-query';

import { rzoApiClient } from '@/lib/http';

type SignUpRequestResponse = {
  access: string;
  refresh: string;
  access_expiration: string;
  refresh_expiration: string;
  user: {
    pk: number;
    email: string;
    first_name: string;
    last_name: string;
    role: 'CLIENT' | 'CASHIER' | 'RECIPIENT';
  };
};

type SignUpRequestBody = {
  email: string;
  password1: string;
  password2: string;
  first_name: string;
  last_name: string;
};

const signUpRequest = async (
  requestBody: SignUpRequestBody
): Promise<SignUpRequestResponse> => {
  return await rzoApiClient
    .post('api/auth/registration', {
      json: requestBody,
    })
    .json<SignUpRequestResponse>();
};

export function useSignUp() {
  return useMutation({
    mutationFn: (requestBody: SignUpRequestBody) => signUpRequest(requestBody),
  });
}
