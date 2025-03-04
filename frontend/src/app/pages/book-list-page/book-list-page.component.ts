import { Component, inject, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { RouterLink } from '@angular/router';
import { BooksApiService } from '../../services/book-api-inmemory.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-book-list-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './book-list-page.component.html',
  styleUrl: './book-list-page.component.css',
})
export class BookListPageComponent implements OnInit {
  private readonly bookService = inject(BooksApiService);
  books$: Observable<Book[]> = new BehaviorSubject<Book[]>([]);
  books?: Book[];

  ngOnInit() {
    this.books$ = this.bookService.findAll();
    this.books$.subscribe((data) => {
      this.books = data;
    });
  }
}
