export interface Article {
  id: number | null;
  barcode: string;
  quantity: number;
  productLabel?: string;
  productImgUrl?: string;
  productThumbUrl?: string;
  productBrand?: string;
}

export type ArticleInfos = Omit<Article, 'quantity'>;
