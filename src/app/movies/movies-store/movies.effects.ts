import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, exhaustMap } from 'rxjs/operators';
import { MoviesService } from '../services/movies.service';

@Injectable()
export class MovieEffects {
  /* loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Movies Page] Get Movie list'),
      exhaustMap(() =>
        this.moviesService.getMovieList().pipe(
          map((movies) => {
            console.log(movies);
            return movies;
          }),
          catchError(() => of({ type: '[Movies page] Movies Loaded Error' }))
        )
      )
    )
  ); */

  constructor(
    private actions$: Actions,
    private moviesService: MoviesService
  ) {}
}
