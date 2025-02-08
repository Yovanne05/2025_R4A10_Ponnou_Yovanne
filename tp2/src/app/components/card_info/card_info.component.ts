import { Component } from "@angular/core";
import { AllCardInfoComponent } from "./all_card_info/allCardInfo.component";

@Component({
  selector: 'title-root',
  standalone: true,
  imports : [AllCardInfoComponent],
  templateUrl: './card_info.component.html',
  styleUrl: './card_info.component.sass'
})

export class CardInfoComponent{

}
