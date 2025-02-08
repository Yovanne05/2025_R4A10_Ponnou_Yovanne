import { Component, Input } from "@angular/core";
import { CommonModule } from '@angular/common';
import { allAvis } from "../../../data/AllAvis";
import { Avis } from "../../../type/Avis";

@Component({
  selector: 'info-avis-root',
  standalone: true,
  imports : [CommonModule],
  templateUrl: './info_avis.component.html',
  styleUrl: './info_avis.component.sass'
})

export class InfoAvisComponent{
  @Input() allAvis: Avis[] = allAvis;
}