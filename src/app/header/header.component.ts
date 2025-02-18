import { Component } from '@angular/core';
import { TitleSiteComponent } from "../title-site/title-site.component";
import { NavigationHeaderComponent } from "../navigation-header/navigation-header.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TitleSiteComponent, NavigationHeaderComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
