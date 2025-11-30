import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'expo-router';
import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';
import * as z from 'zod';

import { Button, ControlledInput, Text, View } from '@/components/ui';
import { translate } from '@/lib/i18n';

const schema = z.object({
  email: z.email('Invalid email format'),
  password: z.string(),
});

export type FormType = z.infer<typeof schema>;

export type SignInFormProps = {
  onSubmit?: SubmitHandler<FormType>;
  isLoading?: boolean;
};

export const SignInForm = ({
  onSubmit = () => {},
  isLoading = false,
}: SignInFormProps) => {
  const { handleSubmit, control } = useForm<FormType>({
    resolver: zodResolver(schema),
  });
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={10}
    >
      <View className="flex-1 justify-center p-4">
        <View className="items-center justify-center">
          <Text
            testID="form-title"
            className="pb-6 text-center text-4xl font-bold"
          >
            {translate('pages.login.title')}
          </Text>
        </View>

        <ControlledInput
          testID="email-input"
          control={control}
          name="email"
          label={translate('pages.login.email_label')}
        />
        <ControlledInput
          testID="password-input"
          control={control}
          name="password"
          label={translate('pages.login.password_label')}
          placeholder="***"
          secureTextEntry={true}
        />
        <Button
          testID="login-button"
          label={translate('pages.login.submit')}
          onPress={handleSubmit(onSubmit)}
          loading={isLoading}
        />
        <Link href="/forgot-password">
          <Text
            testID="sign-up"
            className="pb-6 text-center text-4xl font-bold"
          >
            {translate('pages.login.forgot_password')}
          </Text>
        </Link>
        <Link href="/sign-up">
          <Text
            testID="sign-up"
            className="pb-6 text-center text-4xl font-bold"
          >
            {translate('pages.login.sign_up')}
          </Text>
        </Link>
      </View>
    </KeyboardAvoidingView>
  );
};
