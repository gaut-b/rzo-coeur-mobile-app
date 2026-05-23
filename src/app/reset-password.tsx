import { useRouter } from 'expo-router';
import React from 'react';

import {
  ResetPasswordForm,
  type ResetPasswordFormProps,
} from '@/components/reset-password/reset-password-form';
import {
  FocusAwareStatusBar,
  showError,
  showSuccessMessage,
} from '@/components/ui';
import { useResetPassword } from '@/lib/hooks';
import { translate } from '@/lib/i18n';

export default function ResetPassword() {
  const router = useRouter();
  const resetPasswordMutation = useResetPassword();

  const onSubmit: ResetPasswordFormProps['onSubmit'] = ({ email }) => {
    resetPasswordMutation.mutate(
      { email },
      {
        onSuccess: () => {
          showSuccessMessage(translate('pages.reset-password.success'));
          router.replace('/sign-in');
        },
        onError: showError,
      }
    );
  };

  return (
    <>
      <FocusAwareStatusBar />
      <ResetPasswordForm
        onSubmit={onSubmit}
        isLoading={resetPasswordMutation.isPending}
      />
    </>
  );
}
