import { Component, Input } from "@angular/core";


@Component({
  selector: 'button-root',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.sass'
})

export class ButtonComponent {
    @Input() title!: string;
    @Input() globalColor: string = '#458FF6';
}