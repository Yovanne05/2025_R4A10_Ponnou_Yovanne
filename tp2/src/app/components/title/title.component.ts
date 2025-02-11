import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'title-root',
  standalone: true,
  imports : [CommonModule],
  templateUrl: './title.component.html',
  styleUrl: './title.component.sass'
})

export class TitleComponent {
  @Input({required : true}) title!: string;
  @Input() globalColor: string = '#000';
}
