import { Component, Input } from "@angular/core";

@Component({
  selector: 'title-root',
  standalone: true,
  templateUrl: './title.component.html',
  styleUrl: './title.component.sass'
})

export class TitleComponent {
  @Input() title: string = "Trafalgar";
}