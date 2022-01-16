import { createAction } from '@ngrx/store';
import { MovieInfo } from '../share/constant';

export const movieList = createAction('[Movies Page] Get Movie list');

export const movieListSuccess = createAction(
  '[Movies Page] Get Movie list Success',
  (movies: MovieInfo[]) => ({ movies })
);

export const movieListError = createAction('[Movies Page] Movies Loaded Error');
