import { Component, Input } from '@angular/core';
import { TitleSiteComponent } from '../../title_site/title_site.component';
@Component({
  selector: 'app-trafalgar',
  standalone: true,
  imports: [TitleSiteComponent],
  templateUrl: './trafalgar.component.html',
  styleUrl: './trafalgar.component.sass'
})
export class TrafalgarComponent {
  @Input() miniDesc:string = "Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone";
  @Input() copyright:string = "©Trafalgar PTY LTD 2020. All rights reserved";
}
