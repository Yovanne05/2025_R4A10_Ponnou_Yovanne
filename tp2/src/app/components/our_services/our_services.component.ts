import { Component } from "@angular/core";
import {TitleComponent} from "./title/title.component";
import { AllCardComponent } from "./allCard/allCard.component";

@Component({
  selector: 'our-services-root',
  standalone: true,
  imports : [TitleComponent, AllCardComponent],
  templateUrl: './our_services.component.html',
  styleUrl: './our_services.component.sass'
})

export class OurServicesComponent{
  
}