import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';
import { allLinks } from "../../../data/AllPages";


@Component({
  selector: 'nav-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.sass'
})
export class NavComponent {
  links = allLinks;
}
