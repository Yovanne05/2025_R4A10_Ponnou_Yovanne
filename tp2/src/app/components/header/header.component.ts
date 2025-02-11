import { Component } from "@angular/core";
import { TitleSiteComponent } from "../title_site/title_site.component";
import { NavComponent } from "./nav/nav.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'header-root',
  standalone: true,
  imports : [TitleSiteComponent, NavComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})

export class HeaderComponent{
  
}