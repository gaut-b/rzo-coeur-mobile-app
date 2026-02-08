export type ShopListResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Shop[];
};

export type Shop = {
  id: number;
  name: string;
  full_address: string;
  street_number: string;
  street_name: string;
  postal_code: string;
  city: string;
  latitude: number;
  longitude: number;
  social_center: number;
};
