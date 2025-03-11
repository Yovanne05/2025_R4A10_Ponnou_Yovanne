import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Pizza } from "../models/pizza";

@Injectable({
    providedIn: 'root',
})
export class PizzasService {
    private readonly $pizzas = new BehaviorSubject<Pizza[]>([
        {
            id: "1ezfzfeaf",
            name: 'Margherita',
            slug: 'margherita',
            image: 'https://tse2.mm.bing.net/th?id=OIP.980GqsRwoZjg94qTuVdBZwHaJ_&pid=Api',
            description: 'Une pizza classique avec sauce tomate, mozzarella et basilic frais.',
            ingredients: ['Tomate', 'Mozzarella', 'Basilic'],
            price: 8.99,
            rating: 4
        },
        {
            id: "2zafazfaf",
            name: 'Pepperoni',
            slug: 'pepperoni',
            image: 'https://tse2.mm.bing.net/th?id=OIP.3Z4gvi7mZEpin_3jIwLHHgHaE7&pid=Api',
            description: 'Une pizza savoureuse garnie de pepperoni épicé et de fromage fondu.',
            ingredients: ['Tomate', 'Mozzarella', 'Pepperoni'],
            price: 10.99,
            rating: 5
        },
        {
            id: "3ezfezfzf",
            name: 'Végétarienne',
            slug: 'vegetarienne',
            image: 'https://tse2.mm.bing.net/th?id=OIP.eSDxUs3uRMdNtz74mfFzNAHaEU&pid=Api',
            description: 'Un mélange délicieux de légumes frais et de fromage.',
            ingredients: ['Tomate', 'Mozzarella', 'Poivrons', 'Champignons', 'Oignons'],
            price: 9.99,
            rating: 3
        },
        {
            id: "4ezfzefzf",
            name: 'Quatre Fromages',
            slug: 'quatre-fromages',
            image: 'https://tse2.mm.bing.net/th?id=OIP.eSDxUs3uRMdNtz74mfFzNAHaEU&pid=Api',
            description: 'Une explosion de saveurs avec un mélange de quatre fromages.',
            ingredients: ['Mozzarella', 'Gorgonzola', 'Parmesan', 'Chèvre'],
            price: 11.99,
            rating: 5
        },
    ]);

    constructor() { }

    getPizzas(): Observable<Pizza[]> {
        return this.$pizzas.asObservable();
    }

    getPizzaBySlug(slug: string): Pizza | undefined {
        return this.$pizzas.value.find(pizza => pizza.slug === slug);
    }

    getPizzaById(id: string): Pizza | undefined {
        return this.$pizzas.value.find(pizza => pizza.id === id);
    }

    removePizza(id: string): void {
        const updatedPizzas = this.$pizzas.value.filter(pizza => pizza.id !== id);
        this.$pizzas.next(updatedPizzas);
    }

    updatePizza(updatedPizza: Pizza): void {
        const updatedPizzas = this.$pizzas.value.map(pizza =>
            pizza.id === updatedPizza.id ? updatedPizza : pizza
        );
        this.$pizzas.next(updatedPizzas);
    }

    getStars(rating: number): string[] {
        return Array(5)
          .fill('☆')
          .map((_, i) => (i < rating ? '★' : '☆'));
    }
}
