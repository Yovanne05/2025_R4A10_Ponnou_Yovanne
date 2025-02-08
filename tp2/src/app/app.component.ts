import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VirtualHealthcareComponents } from "./components/virtual_healthcare/virtual_healthcare.component";
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, VirtualHealthcareComponents],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'tp2';
}
