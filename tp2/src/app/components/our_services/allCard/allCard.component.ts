import { Component, Input } from "@angular/core";
import { CardService } from "../../../type";


@Component({
  selector: 'allCard-root',
  standalone: true,
  templateUrl: './allCard.component.html',
  styleUrl: './allCard.component.sass'
})

export class AllCardComponent {
    @Input() cardServices: CardService[] = [
        {
            imageUrl: 'assets/search_doctor.png',
            title: 'Search doctor',
            description: 'Choose your doctor from thousands of specialist, general, and trusted hospitals'
        },
        {
            imageUrl: 'assets/online_pharmacy.png',
            title: 'Online pharmacy',
            description: 'Buy  your medicines with our mobile application with a simple delivery system'
        },
        {
            imageUrl: 'assets/consultation.png',
            title: 'Consultation',
            description: 'Free consultation with our trusted doctors and get the best recomendations'
        },
        {
            imageUrl: 'assets/detail_info.png',
            title: 'Details info',
            description: 'Free consultation with our trusted doctors and get the best recomendations'
        },
        {
            imageUrl: 'assets/emergency_care.png',
            title: 'Emergency care',
            description: 'You can get 24/7 urgent care for yourself or your children and your lovely family'
        },
        {
            imageUrl: 'assets/tracking.png',
            title: 'Tracking',
            description: 'Track and save your medical history and health data '
        }
    ];
    
}