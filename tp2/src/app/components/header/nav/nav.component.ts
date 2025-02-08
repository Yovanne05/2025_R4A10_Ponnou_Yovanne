import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nav-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.sass'
})
export class NavComponent {
  links = [
    { nom: "Home", url: "#" },
    { nom: "Find a doctor", url: "#" },
    { nom: "Apps", url: "#" },
    { nom: "Testimonials", url: "#" }
  ];
}
