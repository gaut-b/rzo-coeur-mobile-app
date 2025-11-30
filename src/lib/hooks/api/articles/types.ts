export type ArticleList = {
  count: number;
  articles: Article[];
};

export type Article = {
  id: number;
  barcode: number;
  name: string;
  shop: ArticleShop;
  status: ArticleStatus;
  cart: ArticleCart | null;
  created_at: string;
};

export type ArticleStatus = 'AVAILABLE' | 'ASSIGNED' | 'COLLECTED';

export type ArticleShop = { id: string; name: string };

export type ArticleCart = {
  id: number;
  status: Omit<ArticleStatus, 'AVAILABLE'>;
};
