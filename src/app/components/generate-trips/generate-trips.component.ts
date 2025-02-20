import { Component } from '@angular/core';
import { TravelSerivce } from '../../../services/Travels_service';
import { Travel } from '../../../type/Travel';

@Component({
  selector: 'app-generate-trips',
  standalone: true,
  imports: [],
  templateUrl: './generate-trips.component.html',
  styleUrl: './generate-trips.component.scss'
})
export class GenerateTripsComponent {

  newTravel: Travel | null = null;
  showAddTravelButton: boolean=false;

  constructor(private travelService: TravelSerivce) { }

  generateTravel() {
    this.newTravel = this.travelService.createTravel();
    this.showAddTravelButton = true;
  }

  addTravelinToList() {
    if (this.newTravel) {
      this.travelService.addTravel(this.newTravel);
      this.newTravel = null;
      this.showAddTravelButton = false;
    }
  }
}
