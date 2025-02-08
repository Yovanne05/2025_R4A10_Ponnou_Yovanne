import { Component } from "@angular/core";
import { InformationComponent } from "./information/information.component";
import {IllustrationComponent} from './illustration/illustration.component';

@Component({
  selector: 'virtual-healthcare-root',
  standalone: true,
  imports : [InformationComponent, IllustrationComponent],
  templateUrl: './virtual_healthcare.component.html',
  styleUrl: './virtual_healthcare.component.sass'
})

export class VirtualHealthcareComponent{
  
}