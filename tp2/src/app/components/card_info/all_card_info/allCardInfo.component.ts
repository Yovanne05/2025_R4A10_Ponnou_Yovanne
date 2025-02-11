import { Component, Input } from "@angular/core";
import { CardInfo } from "../../../type/CardInfo";
import { allCardInfo } from "../../../data/AllCardInfo";
import { ButtonBlueBorderComponent } from "../../button_blueborder/button_blue_border.component";

@Component({
    selector: 'all-card-info-root',
    standalone: true,
    imports : [ButtonBlueBorderComponent],
    templateUrl: './allCardInfo.component.html',
    styleUrl: './allCardInfo.component.sass'
})

export class AllCardInfoComponent {
    @Input() cardServices: CardInfo[] = allCardInfo;
}