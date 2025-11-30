import { useQuery } from '@tanstack/react-query';

import { authenticatedRzoApiClient } from '@/lib/http';

import { type ArticleList } from './types';

type GetArticlesRequestResponse = ArticleList;

const getArticlesRequest = async (): Promise<GetArticlesRequestResponse> => {
  return await authenticatedRzoApiClient
    .get('api/clients/me/articles')
    .json<GetArticlesRequestResponse>();
};

export const useGetArticles = () =>
  useQuery({
    queryKey: ['articles'],
    queryFn: getArticlesRequest,
  });
