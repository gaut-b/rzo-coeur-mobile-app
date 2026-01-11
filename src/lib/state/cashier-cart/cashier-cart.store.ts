import { create } from 'zustand';

import { type Article } from '@/lib/state';

import { createSelectors } from '../utils';

interface CashierStore {
  clientId: string | null;
  clientArticlesByBarcode: Record<string, Article> | null;
  scannedBarcodes: Record<string, number>; // barcode -> scan count
  recipientCartId: string | null;
  setArticles: (articlesById: Record<string, Article>) => void;
  setRecipientData: (clientId: string, recipientCartId: string) => void;
  setClientData: (clientId: string, articles: Record<string, Article>) => void;
  setCartId: (cartId: string) => void;
  scanArticle: (barcode: string) => void;
  clearScannedArticles: () => void;
  setClientId: (clientId: string) => void;
  clear: () => void;
}

const cashierStore = create<CashierStore>((set, get) => ({
  clientId: null,
  clientArticlesByBarcode: null,
  scannedBarcodes: {},
  recipientCartId: null,
  setArticles: (articlesById: Record<string, Article>) => {
    set({ clientArticlesByBarcode: articlesById });
  },
  setCartId: (cartId: string) => {
    set({
      recipientCartId: cartId,
    });
  },
  scanArticle: (barcode: string) => {
    const scannedArticles = get().scannedBarcodes;
    const currentCount = scannedArticles[barcode] || 0;
    set({
      scannedBarcodes: {
        ...scannedArticles,
        [barcode]: currentCount + 1,
      },
    });
  },
  clearScannedArticles: () => {
    set({ scannedBarcodes: {} });
  },

  setClientId: (clientId: string) => {
    set({ clientId });
  },
  clear: () => {
    set({
      clientId: null,
      clientArticlesByBarcode: null,
      scannedBarcodes: {},
      recipientCartId: null,
    });
  },
  setRecipientData: (clientId: string, recipientCartId: string) => {
    set({ clientId, recipientCartId });
  },
  setClientData: (clientId: string, articles: Record<string, Article>) => {
    set({ clientId, clientArticlesByBarcode: articles });
  },
}));

export const useCashierStore = createSelectors(cashierStore);
