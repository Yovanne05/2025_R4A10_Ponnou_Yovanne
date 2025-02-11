import { Component } from '@angular/core';
import { FooterInformationComponent } from "./footer-information/footer-information.component";
import { TrafalgarComponent } from "./trafalgar/trafalgar.component";
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FooterInformationComponent, TrafalgarComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.sass'
})
export class FooterComponent {
  
}
