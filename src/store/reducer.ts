import {createReducer} from '@reduxjs/toolkit';
import {Genres} from '../mocks/genresInfo.ts';
import {changeGenre, loadFilms, setCardsCount} from './actions.ts';
import {FilmCardProps} from '../components/FilmCard/filmCardProps.tsx';

type InitialState = {
  genre: Genres;
  films: FilmCardProps[];
  filteredFilms: FilmCardProps[];
  cardsCount: number;
  dataIsLoading: boolean;
};

export const initialState: InitialState = {
  genre: Genres.All,
  films: [],
  filteredFilms: [],
  cardsCount: 8,
  dataIsLoading: false,
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
      // state.filteredFilms = action.payload;
      // state.cardsCount = Math.min(state.films.length, 8);
    });
});

export {reducer};
