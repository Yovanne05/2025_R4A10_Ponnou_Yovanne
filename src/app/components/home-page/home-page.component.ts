
import { Component, OnInit } from '@angular/core';
import { Travel } from '../../../type/Travel';
import { TravelSerivce } from '../../../services/Travels_service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  
  allTravels: Travel[] = [];
  showDialog: boolean = false;
  selectedID: string | null = null;

  constructor(
    private readonly travelService: TravelSerivce,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
    this.loadTravels();
  }

  onDeleteClick(id: string){
    this.showDialog = true;
    this.selectedID = id;
  }

  onDialogClose() {
    this.showDialog = false;
    this.selectedID = null;
  }

  loadTravels() {
    this.allTravels = this.travelService.getAllTravels();
  }

  deleteTravel() {
    this.travelService.deleteTravel(this.selectedID!);
    this.onDialogClose();
    this.loadTravels();
  }

  onNavigation(travelId: string) {
    this.router.navigate(['/informationTrips', travelId]);
  }
}
