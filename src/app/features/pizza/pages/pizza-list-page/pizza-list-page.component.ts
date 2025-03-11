import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
import { PizzasService } from '../../../../services/pizzas.service';
import { Pizza } from '../../../../models/pizza';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-pizza-list-page',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './pizza-list-page.component.html',
  styleUrl: './pizza-list-page.component.css',
})
export class PizzaListPageComponent implements OnInit {

  constructor(private readonly router: Router){}

  private readonly pizzasService = inject(PizzasService);
  pizzas$: Observable<Pizza[]> = new BehaviorSubject<Pizza[]>([]);
  pizzas?: Pizza[];
  

  ngOnInit() {
    this.pizzas$ = this.pizzasService.getPizzas();
    this.pizzas$.subscribe((data) => {
      this.pizzas = data;
    });
  }

  getStars(rating: number): string[] {
    return this.pizzasService.getStars(rating);
  }

  onNavigation(slug: string) {
    this.router.navigate(['/pizza/', slug]);
  }
}
