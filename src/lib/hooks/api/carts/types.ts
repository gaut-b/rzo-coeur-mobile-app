export type CartArticle = {
  id: number;
  barcode: string;
  name?: string;
  img_url?: string;
  thumb_url?: string;
  brand_label?: string;
};

export type CartStatus = 'PENDING' | 'ASSIGNED' | 'COLLECTED';

// Full Cart type for recipient cart list
export type CartResponse = {
  id: number;
  shop: number;
  shop_name: string;
  recipient: number;
  recipient_email: string;
  recipient_name: string;
  status: CartStatus;
  collected_at: string | null;
  articles: CartArticle[];
};

export type CartListResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: CartResponse[];
};
