import { useMutation } from '@tanstack/react-query';

import { authenticatedRzoApiClient } from '@/lib/http';

export type CreateArticlesRequestBody = {
  client_id: string;
  articles: {
    barcode: string;
    name: string;
    img_url?: string;
    thumb_url?: string;
    brand_label?: string;
  }[];
};

const createArticlesRequest = async (
  body: CreateArticlesRequestBody
): Promise<void> => {
  return await authenticatedRzoApiClient
    .post('api/articles/', {
      json: body,
    })
    .json();
};

export const useCreateArticles = () =>
  useMutation({
    mutationFn: (body: CreateArticlesRequestBody) =>
      createArticlesRequest(body),
  });
