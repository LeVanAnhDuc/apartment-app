// libs
import { jwtDecode } from "jwt-decode";

class TokenService {
  private static instance: TokenService;

  private constructor() {}

  public static getInstance(): TokenService {
    if (!TokenService.instance) {
      TokenService.instance = new TokenService();
    }
    return TokenService.instance;
  }

  public decodeToken<T>(token: string): T | undefined {
    try {
      return jwtDecode<T>(token);
    } catch {
      return undefined;
    }
  }

  public getDecodedIdToken<T>(idToken: string): T | undefined {
    return this.decodeToken<T>(idToken);
  }

  public getDecodedAccessToken<T>(accessToken: string): T | undefined {
    return this.decodeToken<T>(accessToken);
  }
}

export const tokenService = TokenService.getInstance();
