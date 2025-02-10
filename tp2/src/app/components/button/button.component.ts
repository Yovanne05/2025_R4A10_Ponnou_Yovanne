import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";


@Component({
  selector: 'button-root',
  standalone: true,
  imports : [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.sass'
})

export class ButtonComponent {
    @Input() title!: string;
    @Input() globalColor: string = '#458FF6';
}