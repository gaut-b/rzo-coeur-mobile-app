import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'expo-router';
import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { Pressable } from 'react-native';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';
import * as z from 'zod';

import {
  Button,
  ControlledInput,
  ScrollView,
  Text,
  View,
} from '@/components/ui';
import { EyeIcon, EyeOffIcon } from '@/components/ui/icons/eye-icon';
import { translate } from '@/lib/i18n';

const schema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email format'),
  password1: z.string().min(1, 'Password is required'),
  password2: z.string().min(1, 'Password is required'),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
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
    defaultValues: {
      email: '',
      password1: '',
      password2: '',
      firstName: '',
      lastName: '',
    },
  });
  const [showPassword, setShowPassword] = React.useState(false);
  const [showPassword2, setShowPassword2] = React.useState(false);
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={10}
    >
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ padding: 24, flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="mb-4 mt-8 items-center gap-1">
          <Text testID="form-title" className="text-center text-3xl font-bold">
            {translate('pages.sign-up.title')}
          </Text>
          <Text className="text-center text-base text-neutral-500 dark:text-neutral-400">
            {translate('pages.sign-up.subtitle')}
          </Text>
        </View>

        <View className="gap-3">
          <ControlledInput
            testID="email-input"
            control={control}
            name="email"
            label={translate('pages.sign-up.email_label')}
            keyboardType="email-address"
            autoCapitalize="none"
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
          <ControlledInput
            testID="password-input"
            control={control}
            name="password1"
            label={translate('pages.sign-up.password_label')}
            placeholder="***"
            secureTextEntry={!showPassword}
            rightElement={
              <Pressable onPress={() => setShowPassword((v) => !v)} hitSlop={8}>
                {showPassword ? (
                  <EyeOffIcon color="#9ca3af" />
                ) : (
                  <EyeIcon color="#9ca3af" />
                )}
              </Pressable>
            }
          />
          <ControlledInput
            testID="password2-input"
            control={control}
            name="password2"
            label={translate('pages.sign-up.password2_label')}
            placeholder="***"
            secureTextEntry={!showPassword2}
            rightElement={
              <Pressable
                onPress={() => setShowPassword2((v) => !v)}
                hitSlop={8}
              >
                {showPassword2 ? (
                  <EyeOffIcon color="#9ca3af" />
                ) : (
                  <EyeIcon color="#9ca3af" />
                )}
              </Pressable>
            }
          />
          <Button
            testID="sign-up-button"
            label={translate('pages.sign-up.submit')}
            onPress={handleSubmit(onSubmit)}
            loading={isLoading}
          />
          <Link href="/sign-in">
            <Text className="text-center text-sm text-neutral-500 dark:text-neutral-400">
              {translate('pages.sign-up.sign_in')}
            </Text>
          </Link>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
