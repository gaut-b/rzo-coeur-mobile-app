import { zodResolver } from '@hookform/resolvers/zod';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { StyleSheet } from 'react-native';
import { showMessage } from 'react-native-flash-message';

import {
  ManualEntryForm,
  type ManualEntryFormType,
  manualEntrySchema,
} from '@/components/articles/ManualEntryForm';
import { Button, Image, Pressable, Text, View } from '@/components/ui';
import { useRoleProtectedRoute } from '@/lib/hooks';
import { useUploadArticlePhoto } from '@/lib/hooks';
import { translate } from '@/lib/i18n';
import { addArticle } from '@/lib/state';

import ProductPageLayout from './product-page-layout';

type ViewState = 'form' | 'camera' | 'preview';

const IMAGE_QUALITY_RATIO = 0.3;

export default function ManualEntryPage() {
  useRoleProtectedRoute(['CLIENT']);

  const router = useRouter();
  const { barcode } = useLocalSearchParams<{ barcode: string }>();

  const [viewState, setViewState] = useState<ViewState>('form');
  const [capturedUri, setCapturedUri] = useState<string | undefined>();
  const [uploadedUrl, setUploadedUrl] = useState<string | undefined>();
  const [photoError, setPhotoError] = useState(false);

  const { control, handleSubmit } = useForm<ManualEntryFormType>({
    resolver: zodResolver(manualEntrySchema),
    defaultValues: { label: '', brand: '' },
  });

  const cameraRef = useRef<CameraView>(null);
  const [permission, requestPermission] = useCameraPermissions();

  const { mutate: uploadPhoto, isPending: isUploadingPhoto } =
    useUploadArticlePhoto();

  const handleTakePhoto = async () => {
    if (!permission?.granted) {
      const result = await requestPermission();
      if (!result.granted) return;
    }
    setViewState('camera');
  };

  const handleCapture = async () => {
    if (!cameraRef.current) return;
    const photo = await cameraRef.current.takePictureAsync({
      quality: IMAGE_QUALITY_RATIO,
    });
    if (photo?.uri) {
      setCapturedUri(photo.uri);
      setViewState('preview');
    }
  };

  const handleUsePhoto = () => {
    if (!capturedUri) return;
    uploadPhoto(capturedUri, {
      onSuccess: (data) => {
        setUploadedUrl(data.url);
        setPhotoError(false);
        setViewState('form');
      },
      onError: () => {
        showMessage({
          message: translate('pages.manual-entry.upload-error'),
          type: 'danger',
          position: 'bottom',
        });
      },
    });
  };

  const handleRetakePhoto = () => {
    setCapturedUri(undefined);
    setViewState('camera');
  };

  const handleSubmitForm = (data: ManualEntryFormType) => {
    if (!uploadedUrl) {
      setPhotoError(true);
      return;
    }
    addArticle(
      {
        id: null,
        barcode: barcode,
        productLabel: data.label,
        productBrand: data.brand,
        productImgUrl: uploadedUrl,
        productThumbUrl: uploadedUrl,
      },
      1
    );
    showMessage({
      message: translate('pages.manual-entry.success-message'),
      description: translate('pages.manual-entry.success-description'),
      type: 'success',
      position: 'bottom',
      hideOnPress: true,
      onHide: () => router.navigate('/'),
    });
  };

  if (viewState === 'camera') {
    return (
      <View style={StyleSheet.absoluteFillObject}>
        <CameraView
          ref={cameraRef}
          style={StyleSheet.absoluteFillObject}
          facing="back"
        />
        <View className="absolute bottom-12 w-full items-center">
          <Pressable onPress={handleCapture} style={styles.captureButton} />
        </View>
        <View className="absolute top-12 left-4">
          <Button
            variant="outline"
            label={translate('pages.manual-entry.back')}
            onPress={() => setViewState('form')}
          />
        </View>
      </View>
    );
  }

  if (viewState === 'preview') {
    return (
      <ProductPageLayout className="justify-center gap-4">
        {capturedUri && (
          <Image
            className="w-full h-64 rounded-xl"
            contentFit="cover"
            source={{ uri: capturedUri }}
          />
        )}
        <Button
          label={
            isUploadingPhoto
              ? translate('pages.manual-entry.photo-uploading')
              : translate('pages.manual-entry.photo-use')
          }
          onPress={handleUsePhoto}
          loading={isUploadingPhoto}
          disabled={isUploadingPhoto}
        />
        <Button
          variant="outline"
          label={translate('pages.manual-entry.photo-retake')}
          onPress={handleRetakePhoto}
          disabled={isUploadingPhoto}
        />
      </ProductPageLayout>
    );
  }

  return (
    <ProductPageLayout>
      <View className="p-4 gap-1">
        <Text className="text-2xl font-bold">
          {translate('pages.manual-entry.title')}
        </Text>
        <Text className="text-neutral-500 dark:text-neutral-400">
          {translate('pages.manual-entry.subtitle')}
        </Text>
      </View>

      <ManualEntryForm
        onSubmit={handleSubmit(handleSubmitForm)}
        onTakePhoto={handleTakePhoto}
        control={control}
        photoUri={uploadedUrl}
        photoError={photoError}
        isUploadingPhoto={isUploadingPhoto}
      />
    </ProductPageLayout>
  );
}

const styles = StyleSheet.create({
  captureButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'white',
    borderWidth: 4,
    borderColor: '#a3a3a3',
  },
});
