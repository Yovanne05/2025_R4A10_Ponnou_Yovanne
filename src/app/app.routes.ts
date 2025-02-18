import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { GenerateTripsComponent } from './components/generate-trips/generate-trips.component';
import { AllTravelsComponent } from './components/all-travels/all-travels.component';

export const routes: Routes = [
    {
        component: HomePageComponent,
        path: ''
    },
    {
        redirectTo: '',
        path: 'home'
    },
    {
        component: GenerateTripsComponent,
        path: 'generateTrips'
    },
    {
        component: AllTravelsComponent,
        path: 'allTravels'
    }
];
