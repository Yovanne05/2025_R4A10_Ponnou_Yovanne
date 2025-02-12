import { Component, Input } from '@angular/core';
import { Avis } from "../../../type/Avis";
import { allAvis } from "../../../data/AllAvis";

@Component({
  selector: 'info-avis-root',
  standalone: true,
  templateUrl: './info_avis.component.html',
  styleUrls: ['./info_avis.component.sass']
})
export class InfoAvisComponent {

  @Input({required : true}) avisIndex!: number;

  allAvis: Avis[] = allAvis;

  get currentAvis(): Avis {
    return this.allAvis[this.avisIndex];
  }
}
