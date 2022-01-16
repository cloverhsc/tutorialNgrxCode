import { retrievedBookList, addBook, removeBook } from './state/books.actions';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectBookCollection, selectBooks } from './state/books.selectors';
import { BooksService } from './book-list/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);

  onAdd(bookId: string) {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(removeBook({ bookId }));
  }

  constructor(private booksService: BooksService, private store: Store) {}

  ngOnInit() {
    this.booksService.getBooks().subscribe((books) => {
      // console.info(books);
      this.store.dispatch(retrievedBookList({ books }));
    });
  }
}
