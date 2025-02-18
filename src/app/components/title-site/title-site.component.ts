import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-title-site',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './title-site.component.html',
  styleUrl: './title-site.component.scss'
})
export class TitleSiteComponent {

}
