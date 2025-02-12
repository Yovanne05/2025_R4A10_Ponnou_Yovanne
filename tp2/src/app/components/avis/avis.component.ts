import { Component, Input } from "@angular/core";
import { InfoAvisComponent } from "./info_avis/info_avis.component";
import { TitleComponent } from "../title/title.component";
import { SwitchAvisComponent } from "./switch_avis/switch_avis.component";
import { allAvis } from "../../data/AllAvis";
import { Avis } from "../../type/Avis";


@Component({
  selector: 'avis-root',
  standalone: true,
  imports: [InfoAvisComponent, TitleComponent, SwitchAvisComponent],
  templateUrl: './avis.component.html',
  styleUrl: './avis.component.sass'
})

export class AvisComponent{
  @Input() avisIndex: number = 0;

  allAvis: Avis[] = allAvis;

  onAvisChange(indexChange: number) {
    const newIndex = this.avisIndex + indexChange;
    if (newIndex >= 0 && newIndex < this.allAvis.length) {
      this.avisIndex = newIndex;
    } else if (newIndex < 0) {
      this.avisIndex = this.allAvis.length - 1
    } else {
      this.avisIndex = 0;
    }
  }

}