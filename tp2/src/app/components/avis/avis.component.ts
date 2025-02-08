import { Component } from "@angular/core";
import { TitleComponent } from "./title/title.component";
import { InfoAvisComponent } from "./info_avis/info_avis.component";

@Component({
  selector: 'avis-root',
  standalone: true,
  imports: [TitleComponent, InfoAvisComponent],
  templateUrl: './avis.component.html',
  styleUrl: './avis.component.sass'
})

export class AvisComponent{
  
}