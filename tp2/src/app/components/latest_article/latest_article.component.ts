import { Component } from "@angular/core";
import { TitleComponent } from "../title/title.component";
import { AllCardComponent } from "./allCard/allCard.component";

@Component({
  selector: 'latest-article-root',
  standalone: true,
  templateUrl: './latest_article.component.html',
  styleUrl: './latest_article.component.sass',
  imports: [TitleComponent, AllCardComponent]
})

export class LatestArticleComponent {
}
