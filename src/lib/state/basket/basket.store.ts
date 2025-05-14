import { create } from 'zustand';

import { createSelectors } from '../utils';
import { type Article, type ArticleInfos } from './types';
interface BasketState {
  articles: Map<string, Article>;
  addArticle: (article: ArticleInfos, articleQuantity: number) => void;
  removeArticle: (article: ArticleInfos, articleQuantity: number) => void;
  deleteArticle: (articleId: string) => void;
  clear: () => void;
}

const basketStore = create<BasketState>((set, get) => ({
  articles: new Map<string, Article>(),
  addArticle: (article: ArticleInfos, articleQuantity: number) => {
    const articles = get().articles;
    const currentArticleQuantity = articles.get(article.id)?.quantity ?? 0;
    const updatedArticles = articles.set(article.id, {
      id: article.id,
      productBrand: article.productBrand,
      productImgUrl: article.productImgUrl,
      productLabel: article.productLabel,
      productThumbUrl: article.productThumbUrl,
      quantity: currentArticleQuantity + articleQuantity,
    });
    set((state) => ({ ...state, articles: updatedArticles }));
  },
  removeArticle: (article: ArticleInfos, articleQuantity: number) => {
    const articles = get().articles;
    const currentArticleQuantity = articles.get(article.id)?.quantity ?? 0;
    const newQuantity =
      currentArticleQuantity > articleQuantity && currentArticleQuantity > 1
        ? currentArticleQuantity - articleQuantity
        : 1;
    const updatedArticles = articles.set(article.id, {
      id: article.id,
      productBrand: article.productBrand,
      productImgUrl: article.productImgUrl,
      productLabel: article.productLabel,
      productThumbUrl: article.productThumbUrl,
      quantity: newQuantity,
    });
    set((state) => ({ ...state, articles: updatedArticles }));
  },
  deleteArticle: (articleId: string) => {
    const articles = get().articles;
    articles.delete(articleId);
    set((state) => ({ ...state, articles: articles }));
  },
  clear: () => {
    const articles = get().articles;
    articles.clear();
    set((state) => ({ ...state, articles: articles }));
  },
}));

export const useBasket = createSelectors(basketStore);

export const addArticle = (article: ArticleInfos, articleQuantity: number) =>
  basketStore.getState().addArticle(article, articleQuantity);
export const removeArticle = (article: ArticleInfos, articleQuantity: number) =>
  basketStore.getState().removeArticle(article, articleQuantity);
export const deleteArticle = (articleId: string) =>
  basketStore.getState().deleteArticle(articleId);
export const clear = () => basketStore.getState().clear();
