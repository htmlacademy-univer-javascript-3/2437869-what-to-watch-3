import {createReducer} from '@reduxjs/toolkit';
import {Genres} from '../mocks/genresInfo.ts';
import {films} from '../mocks/films.ts';
import {changeGenre, getGenreFilms} from './actions.ts';

export const initialState = {
  genre: Genres.All,
  films: films,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(getGenreFilms, (state) => {
      switch (state.genre) {
        case Genres.All:
          state.films = films;
          break;
        default:
          state.films = films.filter((film) => film.genre === state.genre);
          break;
      }
    });
});

export {reducer};
