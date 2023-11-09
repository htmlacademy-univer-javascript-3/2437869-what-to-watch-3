export const AppRoute = {
  SignIn: '/login',
  MyList: '/mylist',
  Main: '/',
  Film: (id?: number) => `/films/${id || ':id'}`,
  Player: (id?: number) => `/player/${id || ':id'}`,
  AddReview: (id?: number) => `/films/${id || ':id'}/review`,
};

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const MAXDISPLAYEDFILMS = 8;
export const STARCOUNT = 10;
