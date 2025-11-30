import { useRouter } from 'expo-router';
import React from 'react';
import { useAuthStore } from 'src/lib';

import {
  SignInForm,
  type SignInFormProps,
} from '@/components/sign-in/sign-in-form';
import { FocusAwareStatusBar, showError } from '@/components/ui';
import { useSignIn } from '@/lib/hooks';

export default function SignIn() {
  const router = useRouter();
  const signInMutation = useSignIn();
  const status = useAuthStore.use.status();
  const signIn = useAuthStore.use.signIn();

  if (status === 'LOGGED_IN') {
    router.push('/articles');
    return null;
  }

  const onSubmit: SignInFormProps['onSubmit'] = ({ email, password }) => {
    signInMutation.mutate(
      {
        email,
        password,
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
          router.push('/articles');
        },
        //@ts-expect-error. TODO: fix errors
        onError: showError,
      }
    );
  };
  return (
    <>
      <FocusAwareStatusBar />
      <SignInForm onSubmit={onSubmit} isLoading={signInMutation.isPending} />
    </>
  );
}
