import { Component } from "@angular/core";
import { allLinks } from "../../../data/AllPages";


@Component({
  selector: 'nav-root',
  standalone: true,
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.sass'
})
export class NavComponent {
  links = allLinks;
}
