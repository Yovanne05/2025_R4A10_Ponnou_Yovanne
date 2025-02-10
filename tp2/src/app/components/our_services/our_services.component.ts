import { Component } from "@angular/core";
import {TitleComponent} from "../title/title.component";
import { AllCardComponent } from "./allCard/allCard.component";
import { ButtonComponent } from "../button/button.component";
import { DescriptionComponent } from "./description/description.component";

@Component({
  selector: 'our-services-root',
  standalone: true,
  imports: [TitleComponent, AllCardComponent, ButtonComponent, DescriptionComponent],
  templateUrl: './our_services.component.html',
  styleUrl: './our_services.component.sass'
})

export class OurServicesComponent{
  
}