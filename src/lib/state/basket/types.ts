export interface Article {
  id: string;
  quantity: number;
  productLabel: string | undefined;
  productImgUrl: string | undefined;
  productThumbUrl: string | undefined;
  productBrand: string | undefined;
}

export type ArticleInfos = Omit<Article, 'quantity'>;
