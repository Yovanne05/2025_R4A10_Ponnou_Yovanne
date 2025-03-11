import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { PizzasService } from '../../../../services/pizzas.service';
import { OrderLocalService } from '../../../../services/order.service';
import { Router } from '@angular/router';
import { Pizza } from '../../../../models/pizza';
import { Order } from '../../../../models/order';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-order-pizza',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './order-pizza-page.component.html',
  styleUrls: ['./order-pizza-page.component.css'],
})
export class OrderPizzaPageComponent implements OnInit {

  pizzas$: Observable<Pizza[]> = new BehaviorSubject<Pizza[]>([]);
    pizzas?: Pizza[];

  orderForm = new FormGroup({
    pizza: new FormControl('', Validators.required),
    size: new FormControl('medium', Validators.required),
    paymentMethod: new FormControl('cash', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(
    private readonly pizzasService: PizzasService,
    private readonly orderService: OrderLocalService,
  ) {
   
  }

  ngOnInit() {
    this.pizzas$ = this.pizzasService.getPizzas();
    this.pizzas$.subscribe((data) => {
      this.pizzas = data;
    });
  }

  onSubmit() {
    if (this.orderForm.valid) {
      const order = this.orderForm.value;
      this.orderService.create(this.orderForm.value as Order)
    }
  }

  get pizzaControl() {
    return this.orderForm.get('pizza');
  }

  get sizeControl() {
    return this.orderForm.get('size');
  }

  get paymentMethodControl() {
    return this.orderForm.get('paymentMethod');
  }

  get emailControl() {
    return this.orderForm.get('email');
  }
}
