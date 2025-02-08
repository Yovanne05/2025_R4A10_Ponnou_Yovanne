import { Component, Input} from "@angular/core";
import { CardService } from "../../../type/CardService";
import { CommonModule } from "@angular/common";
import { allCardServices } from "../../../data/AllCardServices";

@Component({
  selector: 'allCard-root',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './allCard.component.html',
  styleUrl: './allCard.component.sass'
})

export class AllCardComponent {
    @Input() cardServices: CardService[] = allCardServices;
    
}