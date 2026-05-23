import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'expo-router';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';
import * as z from 'zod';

import { Button, ControlledInput, Text, View } from '@/components/ui';
import { translate } from '@/lib/i18n';

const schema = z.object({
  email: z.email('Invalid email format'),
});

export type FormType = z.infer<typeof schema>;

export type ResetPasswordFormProps = {
  onSubmit?: SubmitHandler<FormType>;
  isLoading?: boolean;
};

export const ResetPasswordForm = ({
  onSubmit = () => {},
  isLoading = false,
}: ResetPasswordFormProps) => {
  const { handleSubmit, control } = useForm<FormType>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
    },
  });

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={10}
    >
      <View className="flex-1 justify-center gap-4 p-6">
        <View className="mb-2 items-center gap-1">
          <Text testID="form-title" className="text-center text-3xl font-bold">
            {translate('pages.reset-password.title')}
          </Text>
          <Text className="text-center text-base text-neutral-500 dark:text-neutral-400">
            {translate('pages.reset-password.subtitle')}
          </Text>
        </View>

        <ControlledInput
          testID="email-input"
          control={control}
          name="email"
          label={translate('pages.reset-password.email_label')}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Button
          testID="submit-button"
          label={translate('pages.reset-password.submit')}
          onPress={handleSubmit(onSubmit)}
          loading={isLoading}
        />

        <Link href="/sign-in">
          <Text className="text-center text-sm text-neutral-500 dark:text-neutral-400">
            {translate('pages.reset-password.back_to_login')}
          </Text>
        </Link>
      </View>
    </KeyboardAvoidingView>
  );
};
