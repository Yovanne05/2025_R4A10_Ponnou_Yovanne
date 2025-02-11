import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";


@Component({
  selector: 'button-blue-border-root',
  standalone: true,
  imports : [CommonModule],
  templateUrl: './button_blue_border.component.html',
  styleUrl: './button_blue_border.component.sass'
})

export class ButtonBlueBorderComponent {
    @Input({required : true}) title!: string;
}