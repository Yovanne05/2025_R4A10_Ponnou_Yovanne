import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TravelSerivce } from '../../../services/Travels_service';
import { Travel } from '../../../type/Travel';

@Component({
  selector: 'app-information-trips',
  standalone: true,
  imports: [],
  templateUrl: './information-trips.component.html',
  styleUrl: './information-trips.component.scss'
})
export class InformationTripsComponent implements OnInit {
  id?: string;
  informationTrips?: Travel;

  constructor(private readonly activatedRoute: ActivatedRoute, private travelService: TravelSerivce) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')!;
    if (this.id) {
      this.informationTrips = this.travelService.getTravelById(this.id);
    }
  }

  deleteTravel(id: string){
    
  }
}
