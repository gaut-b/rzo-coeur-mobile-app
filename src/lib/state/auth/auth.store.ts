import { create } from 'zustand';

import { createSelectors } from '../utils';
import type { AuthTokenType } from './utils';
import {
  getTokens,
  isRefreshTokenExpired,
  persistTokens,
  removeTokens,
} from './utils';

export type Role = 'CLIENT' | 'CASHIER' | 'RECIPIENT';

interface UserType {
  pk: number;
  email: string;
  firstName: string;
  lastName: string;
  role: Role;
}

interface AuthBaseState {
  signIn: (token: AuthTokenType, user: UserType) => void;
  setUser: (user: UserType) => void;
  signOut: () => void;
  hydrate: () => void;
}

interface AuthNotInitializedState extends AuthBaseState {
  status: 'NOT_INITIALIZED';
  authTokens: null;
  user: null;
}

interface AuthLoggedOutState extends AuthBaseState {
  status: 'LOGGED_OUT';
  authTokens: null;
  user: null;
}

interface AuthLoggedInState extends AuthBaseState {
  status: 'LOGGED_IN';
  authTokens: AuthTokenType;
  user: UserType | null;
}

type AuthState =
  | AuthNotInitializedState
  | AuthLoggedInState
  | AuthLoggedOutState;

const authStore = create<AuthState>((set, get) => ({
  status: 'NOT_INITIALIZED',
  authTokens: null,
  user: null,
  signIn: (authTokens, user) => {
    persistTokens(authTokens);
    set({ status: 'LOGGED_IN', authTokens, user });
  },
  signOut: () => {
    removeTokens();
    set({ status: 'LOGGED_OUT', authTokens: null, user: null });
  },
  setUser: (user) => {
    set({ user });
  },
  hydrate: () => {
    try {
      const authTokens = getTokens();

      if (authTokens !== null && !isRefreshTokenExpired(authTokens)) {
        set({ status: 'LOGGED_IN', authTokens, user: null });
      } else {
        get().signOut();
      }
    } catch (e) {
      console.error('Error hydrating auth store', e);
      get().signOut();
    }
  },
}));

export const useAuthStore = createSelectors(authStore);
