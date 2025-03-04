import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  BehaviorSubject,
  Observable,
  startWith,
  Subject,
  Subscription,
  take,
  takeUntil,
  tap,
} from 'rxjs';
import { Book } from '../../models/book';
import { BooksApiService } from '../../services/book-api-inmemory.service';

@Component({
  selector: 'app-create-book-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-book-page.component.html',
  styleUrl: './create-book-page.component.css',
})
export class CreateBookPageComponent {

  private readonly bookApiService = inject(BooksApiService);
  books$: Observable<Book[]> = new BehaviorSubject<Book[]>([]);

  bookForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(35),
    ]),
    author: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(50),
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(255),
    ]),
  });

  onSubmit() {
    if (this.bookForm.valid) {
      this.bookApiService.create(this.bookForm.value as Book).subscribe();
    }
  }


}
