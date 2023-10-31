export enum AppRoute {
  SignIn = '/login',
  Film = '/films/:id',
  MyList = '/mylist',
  Main = '/',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  Test = '/test'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const FILMCOUNT = 9;
