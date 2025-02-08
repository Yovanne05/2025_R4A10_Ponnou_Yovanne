import { Component } from "@angular/core";
import {TitleComponent} from "./title/title.component";

@Component({
  selector: 'our-services-root',
  standalone: true,
  imports : [TitleComponent],
  templateUrl: './our_services.component.html',
  styleUrl: './our_services.component.sass'
})

export class OurServicesComponent{
  
}