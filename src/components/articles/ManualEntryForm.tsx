import type { Control } from 'react-hook-form';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';
import * as z from 'zod';

import { Button, ControlledInput, Image, Text, View } from '@/components/ui';
import { translate } from '@/lib/i18n';

// Schema is built lazily (inside a function) so that translate() is called
// at render time — not at module-load time — allowing runtime language changes.
export const createManualEntrySchema = () =>
  z.object({
    label: z.string().min(1, translate('pages.manual-entry.label-required')),
    brand: z.string().min(1, translate('pages.manual-entry.brand-required')),
  });

export type ManualEntryFormType = z.infer<
  ReturnType<typeof createManualEntrySchema>
>;

export type ManualEntryFormProps = {
  onSubmit: () => void;
  onTakePhoto: () => void;
  control: Control<ManualEntryFormType>;
  photoUri?: string;
  photoError?: boolean;
  isLoading?: boolean;
  isUploadingPhoto?: boolean;
  disabled?: boolean;
};

export const ManualEntryForm = ({
  onSubmit,
  onTakePhoto,
  control,
  photoUri,
  photoError = false,
  isLoading = false,
  isUploadingPhoto = false,
  disabled = false,
}: ManualEntryFormProps) => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={10}
    >
      <View className="flex-1 p-4 gap-4">
        <ControlledInput
          control={control}
          name="label"
          label={translate('pages.manual-entry.label-label')}
          placeholder={translate('pages.manual-entry.label-placeholder')}
        />
        <ControlledInput
          control={control}
          name="brand"
          label={translate('pages.manual-entry.brand-label')}
          placeholder={translate('pages.manual-entry.brand-placeholder')}
        />

        {photoUri ? (
          <View className="items-center gap-2">
            <Image
              className="w-full h-48 rounded-xl border border-neutral-300"
              contentFit="cover"
              source={{ uri: photoUri }}
            />
            <Button
              variant="outline"
              label={
                isUploadingPhoto
                  ? translate('pages.manual-entry.photo-uploading')
                  : translate('pages.manual-entry.photo-retake')
              }
              onPress={onTakePhoto}
              disabled={isUploadingPhoto}
              loading={isUploadingPhoto}
            />
          </View>
        ) : (
          <View className="gap-1">
            <Button
              variant="outline"
              label={translate('pages.manual-entry.photo-button')}
              onPress={onTakePhoto}
            />
            {photoError && (
              <Text className="text-sm text-red-500">
                {translate('pages.manual-entry.photo-required')}
              </Text>
            )}
          </View>
        )}

        <Button
          label={translate('pages.manual-entry.add-to-cart')}
          onPress={onSubmit}
          loading={isLoading}
          disabled={isLoading || disabled}
        />
      </View>
    </KeyboardAvoidingView>
  );
};
