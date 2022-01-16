import { createReducer, on } from '@ngrx/store';
import * as MoviesActions from './movies.action';
import { MovieInfo } from '../share/constant';

export const moviesInitialState: MovieInfo[] = [];

export const moviesReducer = createReducer(
  moviesInitialState,
  on(MoviesActions.movieListSuccess, (state, { movies }) => movies)
);
