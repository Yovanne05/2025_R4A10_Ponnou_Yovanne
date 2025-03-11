import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { PizzasService } from '../../../../services/pizzas.service';
import { Pizza } from '../../../../models/pizza';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-pizza',
  standalone: true,
  imports: [CurrencyPipe, CommonModule, RouterLink],
  templateUrl: './single-pizza.component.html',
  styleUrl: './single-pizza.component.css',
})
export class SinglePizzaComponent implements OnInit {

  pizza: Pizza | undefined;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly pizzasService: PizzasService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    const slug = this.activatedRoute.snapshot.paramMap.get('slug');
    if (slug) {
      this.pizza = this.pizzasService.getPizzaBySlug(slug);
    }
  }

  
  get stars(): number[] {
    if (!this.pizza) {
      return [];
    }
    return Array(this.pizza.rating).fill(0);
  }
}