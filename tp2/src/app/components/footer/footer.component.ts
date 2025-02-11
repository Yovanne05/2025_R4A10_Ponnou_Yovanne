import { Component } from '@angular/core';
import { TitleSiteComponent } from '../title_site/title_site.component';
import { FooterInformationComponent } from "./footer-information/footer-information.component";
import { TrafalgarComponent } from "./trafalgar/trafalgar.component";
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TitleSiteComponent, FooterInformationComponent, TrafalgarComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.sass'
})
export class FooterComponent {
  
}
