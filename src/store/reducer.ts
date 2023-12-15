import {createReducer} from '@reduxjs/toolkit';
import {Genres} from '../mocks/genresInfo.ts';
import {
  changeGenre,
  loadFilms,
  requireAuthorization,
  saveUser,
  setCardsCount,
  setError
} from './actions.ts';
import {FilmCardProps} from '../components/FilmCard/filmCardProps.tsx';
import {AuthorizationStatus} from '../components/App/const.ts';
import {UserData} from '../const.ts';

type InitialState = {
  genre: Genres;
  films: FilmCardProps[];
  filteredFilms: FilmCardProps[];
  cardsCount: number;
  dataIsLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  userData: UserData | null;
};

export const initialState: InitialState = {
  genre: Genres.All,
  films: [],
  filteredFilms: [],
  cardsCount: 8,
  dataIsLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  userData: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(setCardsCount, (state) => {
      const currentFilmsCount = state.films.length;
      state.cardsCount = (state.cardsCount + 8 > currentFilmsCount) ? currentFilmsCount : state.cardsCount + 8;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.filteredFilms = action.payload;
      state.cardsCount = Math.min(state.films.length, 8);
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(saveUser, (state, action) => {
      state.userData = action.payload;
    });
  //.addCase(setFilmsDataLoadingStatus, (state, action) => {
  //  state.dataIsLoading = action.payload;
  //});
});

export {reducer};
