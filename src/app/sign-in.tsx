import { Redirect, useRouter } from 'expo-router';
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
  const status = useAuthStore((state) => state.status);
  const signIn = useAuthStore((state) => state.signIn);
  const user = useAuthStore((state) => state.user);

  if (status === 'LOGGED_IN' && user != null) {
    // Redirect to role-based group route
    if (user.role === 'CLIENT') {
      return <Redirect href="/(client)" />;
    } else if (user.role === 'CASHIER') {
      return <Redirect href="/(cashier)" />;
    } else if (user.role === 'RECIPIENT') {
      return <Redirect href="/(recipient)" />;
    }
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
          router.push('/');
        },
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
