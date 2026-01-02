import { create } from 'zustand';

import { type Article } from '@/lib/state';

import { createSelectors } from '../utils';

interface CashierStore {
  clientArticles: Article[] | null;
  scannedArticles: Record<number, true>;
  recipientCartId: string | null;
  setArticles: (articles: Article[]) => void;
  setCartId: (cartId: string) => void;
  scanArticle: (articleId: number) => void;
}

const cashierStore = create<CashierStore>((set, get) => ({
  clientArticles: null,
  scannedArticles: {},
  recipientCartId: null,
  setArticles: (articles: Article[]) => {
    set({ clientArticles: articles });
  },
  setCartId: (cartId: string) => {
    set({
      recipientCartId: cartId,
    });
  },
  scanArticle: (articleId: number) => {
    const scannedArticles = get().scannedArticles;
    if (!(articleId in scannedArticles)) {
      set({ scannedArticles: { ...scannedArticles, [articleId]: true } });
    }
  },
}));

export const useCashierStore = createSelectors(cashierStore);
