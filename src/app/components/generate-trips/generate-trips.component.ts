import { Component, OnInit } from '@angular/core';
import { TravelsSerivce } from '../../../services/Travels_service';  // Corrigé le nom du service
import { Travel } from '../../../type/Travel';

@Component({
  selector: 'app-generate-trips',
  standalone: true,
  imports: [],
  templateUrl: './generate-trips.component.html',
  styleUrl: './generate-trips.component.scss'
})

export class GenerateTripsComponent implements OnInit {

  newTravel!: Travel;

  constructor(private travelService: TravelsSerivce) { }

  ngOnInit(): void {
    this.newTravel = this.travelService.createTravel();
  }

  addTravelinToList(){
    this.travelService.addTravel(this.newTravel);
  }
  
}
