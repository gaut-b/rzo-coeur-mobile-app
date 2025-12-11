import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';
import * as z from 'zod';

import { Button, ControlledInput, Text, View } from '@/components/ui';
import { translate } from '@/lib/i18n';

const schema = z.object({
  email: z.email('Invalid email format'),
  password1: z.string(),
  password2: z.string(),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
});

export type FormType = z.infer<typeof schema>;

export type SignUpFormProps = {
  onSubmit?: SubmitHandler<FormType>;
  isLoading?: boolean;
};

export const SignUpForm = ({
  onSubmit = () => {},
  isLoading = false,
}: SignUpFormProps) => {
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
            {translate('pages.sign-up.title')}
          </Text>
        </View>

        <ControlledInput
          testID="email-input"
          control={control}
          name="email"
          label={translate('pages.sign-up.email_label')}
        />
        <ControlledInput
          testID="password-input"
          control={control}
          name="password1"
          label={translate('pages.sign-up.password_label')}
          placeholder="***"
          secureTextEntry={true}
        />
        <ControlledInput
          testID="password2-input"
          control={control}
          name="password2"
          label={translate('pages.sign-up.password2_label')}
          placeholder="***"
          secureTextEntry={true}
        />
        <ControlledInput
          testID="firstName-input"
          control={control}
          name="firstName"
          label={translate('pages.sign-up.firstName_label')}
        />
        <ControlledInput
          testID="lastName-input"
          control={control}
          name="lastName"
          label={translate('pages.sign-up.lastName_label')}
        />
        <Button
          testID="sign-up-button"
          label={translate('pages.sign-up.submit')}
          onPress={handleSubmit(onSubmit)}
          loading={isLoading}
        />
      </View>
    </KeyboardAvoidingView>
  );
};
