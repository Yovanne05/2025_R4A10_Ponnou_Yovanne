import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { CreateOrder, Order } from '../models/order';
import { OrderService } from '../order-service.interface';

@Injectable({
  providedIn: 'root',
})
export class OrderLocalService implements OrderService {
  private readonly $orders = new BehaviorSubject<Order[]>([
    {
      id: '0123456',
      paymentMethod: 'Bitcoin',
      pizza: 'Margherita',
      email: 'mario@luigi-family.com',
      size: 'XL',
    },
  ]);

  findMany(): Observable<Order[]> {
    return this.$orders.asObservable();
  }

  create(data: CreateOrder): Observable<Order> {
    const newOrder: Order = {
      ...data,
      id: Math.random().toString().replace('.', ''),
    };

    const updatedOrders = [...this.$orders.getValue(), newOrder];
    this.$orders.next(updatedOrders);
    return of(newOrder);
  }

  remove(id: string): void {
    const updatedOrders = this.$orders.getValue().filter((o) => o.id !== id);
    this.$orders.next(updatedOrders);
  }
}
