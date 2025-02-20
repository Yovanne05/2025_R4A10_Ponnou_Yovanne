import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  allTravels: Travel[] = [];
  showDialog: boolean = false;
  selectedID: string | null = null;

  constructor(private readonly activatedRoute: ActivatedRoute, private travelService: TravelSerivce, private readonly router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')!;
    if (this.id) {
      this.informationTrips = this.travelService.getTravelById(this.id);
    }
  }

  onDeleteClick(id: string){
    this.showDialog = true;
    this.selectedID = id;
  }

  onDialogClose() {
    this.showDialog = false;
    this.selectedID = null;
  }

  deleteTravel() {
    this.travelService.deleteTravel(this.selectedID!);
    this.onDialogClose();
    this.router.navigate(['']);
  }
}
