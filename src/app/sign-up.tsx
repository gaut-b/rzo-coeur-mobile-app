import { Redirect, useRouter } from 'expo-router';
import React from 'react';
import { showMessage } from 'react-native-flash-message';

import {
  SignUpForm,
  type SignUpFormProps,
} from '@/components/sign-up/sign-up-form';
import { FocusAwareStatusBar, showError } from '@/components/ui';
import { useSignUp } from '@/lib/hooks';
import { translate } from '@/lib/i18n';
import { useAuthStore } from '@/lib/state';

export default function SignUp() {
  const router = useRouter();
  const signUpMutation = useSignUp();
  const status = useAuthStore.use.status();

  if (status === 'LOGGED_IN') {
    return <Redirect href="/" />;
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
        onSuccess: () => {
          showMessage({
            message: translate('pages.sign-up.success_message'),
            type: 'success',
          });
          router.push('/sign-in');
        },
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
