import { useMutation } from '@tanstack/react-query';

import { rzoApiClient } from '@/lib/http';

type SignInRequestResponse = {
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

type SignInRequestBody = {
  email: string;
  password: string;
};

const signInRequest = async (
  requestBody: SignInRequestBody
): Promise<SignInRequestResponse> => {
  return await rzoApiClient
    .post('api/auth/login', {
      json: requestBody,
    })
    .json<SignInRequestResponse>();
};

export function useSignIn() {
  return useMutation({
    mutationFn: (requestBody: SignInRequestBody) => signInRequest(requestBody),
  });
}
