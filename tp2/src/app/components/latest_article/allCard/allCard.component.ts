import { Component, Input } from "@angular/core";
import { CardInfo } from "../../../type/CardInfo";
import { allLatestArticles } from "../../../data/AllLatestArticles";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'latest-article-allcard-root',
  standalone: true,
  imports : [CommonModule],
  templateUrl: './allCard.component.html',
  styleUrl: './allCard.component.sass',
})

export class AllCardComponent {
    @Input() allCardLatestArticles : CardInfo[] = allLatestArticles;
}
