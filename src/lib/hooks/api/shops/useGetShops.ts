import { useQuery } from '@tanstack/react-query';

import { authenticatedRzoApiClient } from '@/lib/http';

import { type ShopListResponse } from './types';

type GetShopsParams = {
  latitude?: number;
  longitude?: number;
  enabled?: boolean;
};

const getShopsRequest = async (
  latitude?: number,
  longitude?: number
): Promise<ShopListResponse> => {
  const params = new URLSearchParams();

  if (latitude !== undefined && longitude !== undefined) {
    params.append('latitude', latitude.toString());
    params.append('longitude', longitude.toString());
  }

  const url = params.toString() ? `api/shops/?${params}` : 'api/shops/';

  return await authenticatedRzoApiClient.get(url).json<ShopListResponse>();
};

export const useGetShops = ({
  latitude,
  longitude,
  enabled = true,
}: GetShopsParams = {}) =>
  useQuery({
    queryKey: ['shops', latitude, longitude],
    queryFn: () => getShopsRequest(latitude, longitude),
    enabled,
  });
