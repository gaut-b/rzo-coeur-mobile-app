import { useQuery } from '@tanstack/react-query';

import { authenticatedRzoApiClient } from '@/lib/http';

import { type CartListResponse } from './types';

type GetRecipientCartsParams = {
  page?: number;
};

const getRecipientCartsRequest = async (
  params?: GetRecipientCartsParams
): Promise<CartListResponse> => {
  return await authenticatedRzoApiClient
    .get('api/recipients/me/carts', { searchParams: params })
    .json<CartListResponse>();
};

export const useGetRecipientCarts = (params?: GetRecipientCartsParams) =>
  useQuery({
    queryKey: ['recipient-carts', params],
    queryFn: () => getRecipientCartsRequest(params),
  });
