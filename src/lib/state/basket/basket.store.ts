import { create } from 'zustand';

import { createSelectors } from '../utils';
import { type Article, type ArticleInfos } from './types';
interface BasketState {
  articlesByBarcode: Record<string, Article>;
  addArticle: (article: ArticleInfos, articleQuantity: number) => void;
  removeArticle: (article: ArticleInfos, articleQuantity: number) => void;
  deleteArticle: (articleBarcode: string) => void;
  clear: () => void;
}

const basketStore = create<BasketState>((set, get) => ({
  articlesByBarcode: {},
  addArticle: (article: ArticleInfos, articleQuantity: number) => {
    const articles = get().articlesByBarcode;
    const currentArticleQuantity = articles[article.barcode]?.quantity ?? 0;
    set({
      articlesByBarcode: {
        ...articles,
        [article.barcode]: {
          ...article,
          quantity: currentArticleQuantity + articleQuantity,
        },
      },
    });
  },
  /**
   * Decrements the quantity of an article by `articleQuantity`.
   * The minimum quantity is 1 — this action cannot remove an article entirely.
   * Use `deleteArticle` to fully remove an article from the basket.
   */
  removeArticle: (article: ArticleInfos, articleQuantity: number) => {
    const articles = get().articlesByBarcode;
    const currentArticleQuantity = articles[article.barcode]?.quantity ?? 0;
    const newQuantity =
      currentArticleQuantity > articleQuantity && currentArticleQuantity > 1
        ? currentArticleQuantity - articleQuantity
        : 1;
    set({
      articlesByBarcode: {
        ...articles,
        [article.barcode]: {
          ...article,
          quantity: newQuantity,
        },
      },
    });
  },
  deleteArticle: (articleBarcode: string) => {
    const articles = get().articlesByBarcode;
    const { [articleBarcode]: _, ...rest } = articles;
    set({ articlesByBarcode: rest });
  },
  clear: () => {
    set({ articlesByBarcode: {} });
  },
}));

export const useBasketStore = createSelectors(basketStore);

export const addArticle = (article: ArticleInfos, articleQuantity: number) =>
  basketStore.getState().addArticle(article, articleQuantity);
export const removeArticle = (article: ArticleInfos, articleQuantity: number) =>
  basketStore.getState().removeArticle(article, articleQuantity);
export const deleteArticle = (articleBarcode: string) =>
  basketStore.getState().deleteArticle(articleBarcode);
export const clear = () => basketStore.getState().clear();
