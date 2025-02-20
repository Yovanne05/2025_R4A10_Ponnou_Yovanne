import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { GenerateTripsComponent } from './components/generate-trips/generate-trips.component';
import { InformationTripsComponent } from './components/information-trips/information-trips.component';
import { Page404Component } from './components/page-404/page-404.component';

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
        component: InformationTripsComponent,
        path: 'informationTrips/:id'
    },
    {
        path: '**',
        redirectTo: '404',
    },
    {
       component: Page404Component,
        path: '404'
    },
];
