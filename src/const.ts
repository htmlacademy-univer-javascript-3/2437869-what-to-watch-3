import {store} from './store';

export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id'
}

export enum ApiRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
  Reviews = '/comments',
  SimilarFilms = '/similar',
  Promo = '/promo',
  Favorite = '/favorite',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const TIMEOUT_SHOW_ERROR = 2000;
export const VISIBLE_FILM_CARD_COUNT = 8;
export const HOVER_FILM_CARD_TIME = 1000;
export const MIN_LENGTH_REVIEW = 50;
export const MAX_LENGTH_REVIEW = 1000;
export const TIME_TRANSLATION = 60;
export const SIMILAR_FILM_CARD_COUNT = 4;
export const RE_PASSWORD = /(?=.*[0-9])(?=.*[a-zA-Z])[0-9a-zA-Z]{2,}/;
export const RE_EMAIL = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;


export enum Genre {
  All = 'All Genres',
  Comedy = 'Comedy',
  Crime = 'Crime',
  Documentary = 'Documentary',
  Drama = 'Drama',
  Horror = 'Horror',
  KidsFamily = 'Kids & Family',
  Romance = 'Romance',
  SciFi = 'Sci-Fi',
  Thriller = 'Thriller'
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

export type Review = {
  id: number;
  text: string;
  author: string;
  comment: string;
  user: string;
  date: string;
  rating: number;
  filmId?: number;
}

export type UserReview = {
  filmId: string;
  rating: number;
  comment: string;
}


export enum Reducer {
  USER_REDUCER = 'USER_REDUCER',
  MAIN_REDUCER = 'MAIN_REDUCER',
  FILM_REDUCER = 'FILM_REDUCER',
}


export type UserState = {
  authorizationStatus: AuthorizationStatus;
  avatar: string | null;
  loginState: LogInState;
}

export type FilmState = {
  film: Film | null;
  reviews: Review[];
  similarFilms: Film[];
  isFilmLoading: boolean;
}

export enum LogInState {
  NoError = 'NoError',
  NotValidEmail = 'NotValidEmail',
  NotValidPassword = 'NotValidPassword',
  NotValidEmailAndPassword = 'NotValidEmailAndPassword',
}

export type Film = {
  id: string;
  name: string;
  genre: Genre;
  released: number;
  previewImage: string;
  posterImage: string;
  backgroundImage: string;
  scoresCount: number;
  rating: number;
  description: string;
  director: string;
  starring: string[];
  runTime: string;
  previewVideoLink: string;
  videoLink: string;
  isFavorite: boolean;
}

export type AppState = {
  genre: Genre;
  films: Film[];
  sortedFilms: Film[];
  filmCardCount: number;
  dataIsLoading: boolean;
  error: string | null;
  promo: Film | null;
  favoriteCount: number;
  favoriteFilms: Film[];
}


export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
