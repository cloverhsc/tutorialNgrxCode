import { createSelector, createFeatureSelector } from '@ngrx/store';
import { MovieInfo } from '../share/constant';

export const mvList = (state: MovieInfo[]) => state;

export const movielistinfo = createSelector(
  mvList,
  (state: MovieInfo[]) => state
);
