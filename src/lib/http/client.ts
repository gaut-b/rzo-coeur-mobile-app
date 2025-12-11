import { Env } from '@env';
import ky, { type Options } from 'ky';

import {
  isAccessTokenExpired,
  isRefreshTokenExpired,
  persistTokens,
  useAuthStore,
} from '@/lib/state';

type RefreshRequestResponse = {
  access: string;
  access_expiration: string;
};

type RefreshRequestBody = {
  refresh: string;
};

const BASE_CLIENT_CONFIG: Options = {};

class AuthService {
  refreshRequestPromise: Promise<RefreshRequestResponse> | null = null;

  private readonly refresh = async (
    body: RefreshRequestBody
  ): Promise<RefreshRequestResponse> => {
    return await rzoApiClient
      .post('api/auth/token/refresh', {
        json: body,
      })
      .json<RefreshRequestResponse>();
  };

  /** Returns a valid access token, refreshing it if necessary
   * this avoids concurrent refresh requests
   *
   */
  async getValidAuthToken() {
    const authToken = useAuthStore.getState().authTokens;
    const signOut = useAuthStore.getState().signOut;

    if (authToken !== null) {
      if (!isAccessTokenExpired(authToken)) {
        return authToken.access;
      }
      if (!isRefreshTokenExpired(authToken)) {
        this.refreshRequestPromise ??= this.refresh({
          refresh: authToken.refresh,
        });
        try {
          const refreshedToken = await this.refreshRequestPromise;
          persistTokens({
            ...authToken,
            access: refreshedToken.access,
            access_expiration: refreshedToken.access_expiration,
          });

          return refreshedToken.access;
        } catch {
          signOut();
          return undefined;
        } finally {
          this.refreshRequestPromise = null;
        }
      }
    }
  }
}

const authService = new AuthService();

export const openFoodFactsApiClient = ky.create({
  ...BASE_CLIENT_CONFIG,
  prefixUrl: Env.OPEN_FOOD_FACTS_API_BASE_URL,
});

export const rzoApiClient = ky.create({
  ...BASE_CLIENT_CONFIG,
  prefixUrl: Env.RZO_API_BASE_URL,
});

export const authenticatedRzoApiClient = rzoApiClient.extend({
  hooks: {
    beforeRequest: [
      async (request) => {
        const authToken = await authService.getValidAuthToken();
        if (authToken) {
          request.headers.set('Authorization', `Bearer ${authToken}`);
        }
      },
    ],
  },
});
