import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class BooksApiService {
  private readonly API_URL = 'http://localhost:5000';
  constructor(private readonly http: HttpClient) {}

  findAll(): Observable<Book[]> {
    return this.http.get<Book[]>(this.API_URL + '/books');
  }

  findOne(id: number): Observable<Book> {
    return this.http.get<Book>(this.API_URL + `/books/${id}`).pipe(
      catchError((err) => {
        throw new Error('Une erreur est survenue:', err);
      })
    );
  }

  create(book: Book): Observable<{ id: number }> {
    return this.http.post<Book>(this.API_URL + '/books', book).pipe(
      map((data) => data),
      tap((data) => console.log('Livre créé:', data))
    );

  }

  delete(id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.API_URL}/books/${id}`).pipe(
      tap((data) => console.log('data:', data))
    );
  }
}
