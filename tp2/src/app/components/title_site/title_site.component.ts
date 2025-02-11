import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'title-site-root',
  standalone: true,
  imports : [CommonModule],
  templateUrl: './title_site.component.html',
  styleUrl: './title_site.component.sass'
})

export class TitleSiteComponent {
  @Input() title: string = "Trafalgar";
  @Input() colorBgTitleIcon: string = "#458FF6";
  @Input() colorTitle: string = "#233348";
  @Input() colorTitleIcon: string= "#fff";
}