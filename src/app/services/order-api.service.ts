import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateOrder, Order } from '../models/order';
import { OrderService } from '../order-service.interface';

@Injectable({
  providedIn: 'root',
})
export class OrderApiService implements OrderService {
  private readonly API_URL = 'http://localhost:5000/api';
  private readonly ORDERS_ENDPOINT = `${this.API_URL}/orders`;

  constructor(private readonly http: HttpClient) {}

  findMany(): Observable<Order[]> {
    return this.http.get<Order[]>(this.ORDERS_ENDPOINT);
  }

  create(data: CreateOrder): Observable<Order> {
    return this.http.post<Order>(this.ORDERS_ENDPOINT, data);
  }

  remove(id: string): Observable<void> {
    const url = `${this.ORDERS_ENDPOINT}/${id}`;
    return this.http.delete<void>(url);
  }
}
