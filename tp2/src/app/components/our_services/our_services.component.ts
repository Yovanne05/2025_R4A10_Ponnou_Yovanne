import { Component } from "@angular/core";
import {TitleComponent} from "../title/title.component";
import { AllCardComponent } from "./allCard/allCard.component";
import { ButtonBlueBorderComponent } from "../button_blueborder/button_blue_border.component";
import { DescriptionComponent } from "./description/description.component";

@Component({
  selector: 'our-services-root',
  standalone: true,
  imports: [TitleComponent, AllCardComponent, ButtonBlueBorderComponent, DescriptionComponent],
  templateUrl: './our_services.component.html',
  styleUrl: './our_services.component.sass'
})

export class OurServicesComponent{
  
}