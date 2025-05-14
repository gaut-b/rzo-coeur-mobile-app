import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { openFoodFactsApiClient } from '../common/client';
import { type Product } from './types';

type Response = Product;

export const useGetProduct = (productId: string) =>
  createQuery<Response, void, AxiosError>({
    queryKey: ['products', productId],
    fetcher: () =>
      openFoodFactsApiClient
        .get(`/product/${productId}.json`)
        .then((res) => res.data),
  })();
