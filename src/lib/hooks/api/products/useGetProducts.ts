import { useQuery } from '@tanstack/react-query';

import { openFoodFactsApiClient } from '@/lib/http';

import { type Product } from './types';

type GetProductRequestResponse = Product;

const getProductInfoRequest = async (
  productId: string
): Promise<GetProductRequestResponse> => {
  return await openFoodFactsApiClient
    .get(`product/${productId}.json`)
    .json<GetProductRequestResponse>();
};

export const useGetProduct = (productId: string) =>
  useQuery({
    queryKey: ['products', productId],
    queryFn: () => getProductInfoRequest(productId),
  });
