import { create } from 'zustand';

import { createSelectors } from '../utils';

interface RecipientCartState {
  scannedArticles: Record<number, true>;
  currentCartId: string | null;
  scanArticle: (articleId: number) => void;
  setCartId: (cartId: string) => void;
  clearScannedArticles: () => void;
  isArticleScanned: (articleId: number) => boolean;
}

const recipientCartStore = create<RecipientCartState>((set, get) => ({
  scannedArticles: {},
  currentCartId: null,
  scanArticle: (articleId: number) => {
    const scannedArticles = get().scannedArticles;
    if (!(articleId in scannedArticles)) {
      set({ scannedArticles: { ...scannedArticles, [articleId]: true } });
    }
  },
  setCartId: (cartId: string) => {
    // Always update currentCartId; clear scanned articles only if cart changes
    set({
      currentCartId: cartId,
      scannedArticles:
        get().currentCartId !== cartId ? {} : get().scannedArticles,
    });
  },
  clearScannedArticles: () => {
    set({ scannedArticles: {} });
  },
  isArticleScanned: (articleId: number) => {
    return articleId in get().scannedArticles;
  },
}));

export const useRecipientCartStore = createSelectors(recipientCartStore);
