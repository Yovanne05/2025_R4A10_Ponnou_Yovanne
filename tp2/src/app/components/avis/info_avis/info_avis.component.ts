import { Component, Input } from "@angular/core";
import { CommonModule } from '@angular/common';
import { Avis } from "../../../type/Avis";

@Component({
  selector: 'info-avis-root',
  standalone: true,
  imports : [CommonModule],
  templateUrl: './info_avis.component.html',
  styleUrl: './info_avis.component.sass'
})

export class InfoAvisComponent{
  @Input() allAvis: Avis[] = [
    {
        imageUrl : "assets/profilpicture.png",
        name: "Edward Newgate",
        role:"Founder Circle",
        description :"“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”"
    }
  ]
}