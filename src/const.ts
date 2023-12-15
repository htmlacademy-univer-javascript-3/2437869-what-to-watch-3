export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
  Reviews = '/comments',
  SimilarFilms = '/similar',
  Promo = '/promo',
  Favorite = '/favorite',
}

export type AuthData = {
  email: string;
  password: string;
};

export type UserData = {
  avatarUrl: string;
  email: string;
  id: number;
  name: string;
  token: string;
};

export const TIMEOUT_SHOW_ERROR = 2000;
