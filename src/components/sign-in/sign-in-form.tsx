import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'expo-router';
import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { Pressable } from 'react-native';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';
import * as z from 'zod';

import { Button, ControlledInput, Text, View } from '@/components/ui';
import { EyeIcon, EyeOffIcon } from '@/components/ui/icons/eye-icon';
import { translate } from '@/lib/i18n';

const schema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email format'),
  password: z.string().min(1, 'Password is required'),
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
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={10}
    >
      <View className="flex-1 justify-center gap-4 p-6">
        <View className="mb-2 items-center gap-1">
          <Text testID="form-title" className="text-center text-3xl font-bold">
            {translate('pages.login.title')}
          </Text>
          <Text className="text-center text-base text-neutral-500 dark:text-neutral-400">
            {translate('pages.login.subtitle')}
          </Text>
        </View>

        <ControlledInput
          testID="email-input"
          control={control}
          name="email"
          label={translate('pages.login.email_label')}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <ControlledInput
          testID="password-input"
          control={control}
          name="password"
          label={translate('pages.login.password_label')}
          placeholder="***"
          secureTextEntry={!showPassword}
          rightElement={
            <Pressable
              onPress={() => setShowPassword((v) => !v)}
              hitSlop={8}
              accessibilityRole="button"
              accessibilityLabel={
                showPassword
                  ? 'Masquer le mot de passe'
                  : 'Afficher le mot de passe'
              }
            >
              {showPassword ? (
                <EyeOffIcon color="#9ca3af" />
              ) : (
                <EyeIcon color="#9ca3af" />
              )}
            </Pressable>
          }
        />
        {/*TODO: IMPLEMENT forgot password page*/}
        <Text className="text-center text-sm text-neutral-400 dark:text-neutral-600">
          {translate('pages.login.forgot_password')}
        </Text>
        <Button
          testID="login-button"
          label={translate('pages.login.submit')}
          onPress={handleSubmit(onSubmit)}
          loading={isLoading}
        />
        <Link href="/sign-up">
          <Text className="text-center text-sm text-neutral-500 dark:text-neutral-400">
            {translate('pages.login.sign_up')}
          </Text>
        </Link>
      </View>
    </KeyboardAvoidingView>
  );
};
