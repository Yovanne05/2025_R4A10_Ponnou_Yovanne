import { Component } from "@angular/core";
import { InfoAvisComponent } from "./info_avis/info_avis.component";
import { TitleComponent } from "../title/title.component";
import { SwitchAvisComponent } from "./switch_avis/switch_avis.component";


@Component({
  selector: 'avis-root',
  standalone: true,
  imports: [InfoAvisComponent, TitleComponent, SwitchAvisComponent],
  templateUrl: './avis.component.html',
  styleUrl: './avis.component.sass'
})

export class AvisComponent{
  
}