import { Component, Input } from "@angular/core";
import { CardInfo } from "../../../type/CardInfo";
import { allCardInfo } from "../../../data/AllCardInfo";
import { ButtonComponent } from "../../button/button.component";

@Component({
    selector: 'all-card-info-root',
    standalone: true,
    imports : [ButtonComponent],
    templateUrl: './allCardInfo.component.html',
    styleUrl: './allCardInfo.component.sass'
})

export class AllCardInfoComponent {
    @Input() cardServices: CardInfo[] = allCardInfo;
}