import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { booksReducer } from './state/books.reducer';
import { collectionReducer } from './state/collection.reducer';
import { BookListComponent } from './book-list/book-list.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { LoginComponent } from './login/login.component';
import { loginReducer } from './login/login-store/login-page.reducer';
import { MoviesComponent } from './movies/movies.component';
import { moviesReducer } from './movies/movies-store/movies.reducer';

import { EffectsModule } from '@ngrx/effects';
import { MovieEffects } from './movies/movies-store/movies.effects';
@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookCollectionComponent,
    LoginComponent,
    MoviesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      books: booksReducer,
      collection: collectionReducer,
      login: loginReducer,
      movie: moviesReducer,
    }),
    EffectsModule.forRoot([MovieEffects]),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
