import { MoviesService } from './services/movies.service';
import { MovieInfo } from './share/constant';
import { Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { movielistinfo, mvList } from './movies-store/movies.selectors';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies$!: Observable<MovieInfo[]>;
  // movies$: Observable<MovieInfo[]> = this.store.select();
  constructor(private store: Store, private movieServ: MoviesService) {}

  ngOnInit(): void {
    this.movieServ.getMovieList().subscribe((res: MovieInfo[]) => {
      this.movies$ = of(res);
    });
  }
}
