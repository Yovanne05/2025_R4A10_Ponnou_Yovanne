
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

  currentPage: number = 1;
  travelsPerPage: number = 20;
  pagedTravels: Travel[] = [];


  constructor(
    private readonly travelService: TravelSerivce,
    private readonly router: Router,
  ) { }

  updatePagedTravels() {
    const startIndex = (this.currentPage - 1) * this.travelsPerPage;
    const endIndex = startIndex + this.travelsPerPage;
    this.pagedTravels = this.allTravels.slice(startIndex, endIndex);
  }


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
    this.updatePagedTravels();
  }

  nextPage() {
    if (this.currentPage * this.travelsPerPage < this.allTravels.length) {
      this.currentPage++;
      this.updatePagedTravels();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagedTravels();
    }
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
