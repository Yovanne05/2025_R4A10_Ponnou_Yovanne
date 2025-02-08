import { Component, Input } from "@angular/core";

@Component({
  selector: 'illustration-root',
  standalone: true,
  templateUrl: './illustration.component.html',
  styleUrl: './illustration.component.sass'
})

export class IllustrationComponent{
    @Input() imageLink: string = "assets/virtual_healthcare_image.png";
}