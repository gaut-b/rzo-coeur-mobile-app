import { useMutation } from '@tanstack/react-query';

import { authenticatedRzoApiClient } from '@/lib/http';

type PostCollectCartParams = {
  cartId: string | null;
  recipientId: string | null;
};

const collectCartRequest = async (
  params: PostCollectCartParams
): Promise<void> => {
  return await authenticatedRzoApiClient
    .post(
      `api/recipients/${params.recipientId}/carts/${params.cartId}/collect/`
    )
    .json();
};

export const useCollectCart = () =>
  useMutation({
    mutationFn: (params: PostCollectCartParams) => collectCartRequest(params),
  });
