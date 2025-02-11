import { Component, Input } from "@angular/core";
import { allAvis } from "../../../data/AllAvis";
import { Avis } from "../../../type/Avis";

@Component({
  selector: 'info-avis-root',
  standalone: true,
  templateUrl: './info_avis.component.html',
  styleUrl: './info_avis.component.sass'
})

export class InfoAvisComponent{
  @Input() allAvis: Avis[] = allAvis;
}