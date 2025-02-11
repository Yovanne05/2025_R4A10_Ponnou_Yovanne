import { Component, Input } from "@angular/core";
import { ButtonBlueBorderComponent } from "../button_blueborder/button_blue_border.component";
import { CardInfo } from "../../type/CardInfo";
import { allCardInfo } from "../../data/AllCardInfo";

@Component({
    selector: 'all-card-info-root',
    standalone: true,
    imports : [ButtonBlueBorderComponent],
    templateUrl: './card_info.component.html',
    styleUrl: './card_info.component.sass'
})

export class AllCardInfoComponent {
    @Input() cardServices: CardInfo[] = allCardInfo;
}