import { useQuery } from '@tanstack/react-query';

import { authenticatedRzoApiClient } from '@/lib/http';

import { type CartResponse } from './types';

type GetRecipientCartsParams = {
  cartId: string;
};

const getCartByIdRequest = async (
  params: GetRecipientCartsParams
): Promise<CartResponse> => {
  return await authenticatedRzoApiClient
    .get(`api/carts/${params.cartId}`)
    .json<CartResponse>();
};

export const useGetCartById = (params: GetRecipientCartsParams) =>
  useQuery({
    queryKey: ['cart', params.cartId],
    queryFn: () => getCartByIdRequest(params),
  });
