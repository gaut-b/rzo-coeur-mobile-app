import { useRouter } from 'expo-router';
import React from 'react';

import {
  SignUpForm,
  type SignUpFormProps,
} from '@/components/sign-up/sign-up-form';
import { FocusAwareStatusBar, showError } from '@/components/ui';
import { useSignUp } from '@/lib/hooks';
import { useAuthStore } from '@/lib/state';

export default function SignUp() {
  const router = useRouter();
  const signUpMutation = useSignUp();
  const status = useAuthStore.use.status();
  const signIn = useAuthStore.use.signIn();

  if (status === 'LOGGED_IN') {
    router.push('/');
    return null;
  }

  const onSubmit: SignUpFormProps['onSubmit'] = ({
    email,
    password1,
    password2,
    firstName,
    lastName,
  }) => {
    signUpMutation.mutate(
      {
        email,
        password1,
        password2,
        first_name: firstName,
        last_name: lastName,
      },
      {
        onSuccess: (data) => {
          signIn(
            {
              access: data.access,
              refresh: data.refresh,
              access_expiration: data.access_expiration,
              refresh_expiration: data.refresh_expiration,
            },
            {
              ...data.user,
              firstName: data.user.first_name,
              lastName: data.user.last_name,
            }
          );
          router.push('/sign-in');
        },
        //@ts-expect-error. TODO: fix errors
        onError: showError,
      }
    );
  };
  return (
    <>
      <FocusAwareStatusBar />
      <SignUpForm onSubmit={onSubmit} isLoading={signUpMutation.isPending} />
    </>
  );
}
