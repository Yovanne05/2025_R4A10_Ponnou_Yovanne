import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { ActivatedRoute } from '@angular/router';
import { BooksApiService } from '../../services/book-api-inmemory.service';
import { BehaviorSubject, Observable } from 'rxjs';
@Component({
  selector: 'app-single-book-page',
  standalone: true,
  templateUrl: './single-book-page.component.html',
  styleUrl: './single-book-page.component.css',
})
export class SingleBookPageComponent implements OnInit {
  book$: Observable<Book> = new BehaviorSubject<Book>({
    id: -1,
    title: '',
    author: '',
    description: '',
    coverUrl: '',
  });

  book?: Book;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly bookService: BooksApiService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.book$ = this.bookService.findOne(id);

    this.book$.subscribe((data) => {
      this.book = data;
    });

  }
}
