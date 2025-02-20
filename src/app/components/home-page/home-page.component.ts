import { Component, OnInit } from '@angular/core';
import { Travel } from '../../../type/Travel';
import { TravelSerivce } from '../../../services/Travels_service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  
  allTravels: Travel[] = [];

  constructor(private travelService: TravelSerivce) { }

  ngOnInit(): void {
    this.loadTravels();
  }

  loadTravels() {
    this.allTravels = this.travelService.getAllTravels();
  }

  deleteTravel(id: string) {
    this.travelService.deleteTravel(id);
    this.loadTravels();
  }
}
