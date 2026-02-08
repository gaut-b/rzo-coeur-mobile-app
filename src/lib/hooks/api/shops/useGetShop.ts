import { useQuery } from '@tanstack/react-query';

import { authenticatedRzoApiClient } from '@/lib/http';

import { type Shop } from './types';

const getShopRequest = async (id: number): Promise<Shop> => {
  return await authenticatedRzoApiClient.get(`api/shops/${id}/`).json<Shop>();
};

export const useGetShop = (id: number) =>
  useQuery({
    queryKey: ['shop', id],
    queryFn: () => getShopRequest(id),
    enabled: !!id,
  });
