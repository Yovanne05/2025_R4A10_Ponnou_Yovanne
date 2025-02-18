import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-header',
  standalone: true,
  imports: [],
  templateUrl: './navigation-header.component.html',
  styleUrl: './navigation-header.component.scss'
})
export class NavigationHeaderComponent {
  links = [
    { nom: "All Travels", url: "allTravels" },
    { nom: "Generate Trips", url: "GenerateTrips" }
  ];
}
