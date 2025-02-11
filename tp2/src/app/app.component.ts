import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import {VirtualHealthcareComponent} from './components/virtual_healthcare/virtual_healthcare.comoponent';
import { OurServicesComponent } from './components/our_services/our_services.component';
import { AllCardInfoComponent } from "./components/card_info/all_card_info/allCardInfo.component";
import { AvisComponent } from './components/avis/avis.component';
import { LatestArticleComponent } from "./components/latest_article/latest_article.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, VirtualHealthcareComponent, OurServicesComponent, AllCardInfoComponent, AvisComponent, LatestArticleComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'tp2';
}
