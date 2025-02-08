import { Component } from "@angular/core";
import { InfoAvisComponent } from "./info_avis/info_avis.component";
import { TitleComponent } from "../title/title.component";

@Component({
  selector: 'avis-root',
  standalone: true,
  imports: [InfoAvisComponent, TitleComponent],
  templateUrl: './avis.component.html',
  styleUrl: './avis.component.sass'
})

export class AvisComponent{
  
}