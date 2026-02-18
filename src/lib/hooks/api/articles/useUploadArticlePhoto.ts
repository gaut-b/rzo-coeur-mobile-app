import { useMutation } from '@tanstack/react-query';

import { authenticatedRzoApiClient } from '@/lib/http';

export type UploadArticlePhotoResponse = {
  url: string;
};

const generateUniquePhotoFilename = (): string => {
  const timestamp = Date.now();
  const randomPart = Math.random().toString(36).slice(2);
  return `photo_${timestamp}_${randomPart}.jpg`;
};

const uploadArticlePhotoRequest = async (
  imageUri: string
): Promise<UploadArticlePhotoResponse> => {
  const formData = new FormData();
  formData.append('image', {
    uri: imageUri,
    name: generateUniquePhotoFilename(),
    type: 'image/jpeg',
  } as unknown as Blob);

  return await authenticatedRzoApiClient
    .post('api/articles/photos/', {
      body: formData,
    })
    .json<UploadArticlePhotoResponse>();
};

export const useUploadArticlePhoto = () =>
  useMutation({
    mutationFn: (imageUri: string) => uploadArticlePhotoRequest(imageUri),
  });
