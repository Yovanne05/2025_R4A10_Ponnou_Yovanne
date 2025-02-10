import { Component } from "@angular/core";
import { TitleComponent } from "./title/title.component";
import { NavComponent } from "./nav/nav.component";

@Component({
  selector: 'header-root',
  standalone: true,
  imports : [TitleComponent, NavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})

export class HeaderComponent{
  
}