import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponents } from "./components/header/header.component";
import { VirtualHealthcareComponents } from "./components/virtual_healthcare/virtual_healthcare.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponents, VirtualHealthcareComponents],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'tp2';
}
