import { Component, Input } from '@angular/core';
import { allInfoCompagny } from '../../../data/AllCompagnyInfo';
import { InfoCompagny } from '../../../type/CompagnyInfo';


@Component({
  selector: 'app-footer-information',
  standalone: true,
  imports: [],
  templateUrl: './footer-information.component.html',
  styleUrl: './footer-information.component.sass'
})
export class FooterInformationComponent {
  @Input() allInfoCompagny: InfoCompagny[] = allInfoCompagny;
}
