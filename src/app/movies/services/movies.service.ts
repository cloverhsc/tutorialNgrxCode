import { MovieInfo } from './../share/constant';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}
  getMovieList() {
    return this.http.get<MovieInfo[]>('/movie');
  }
}
