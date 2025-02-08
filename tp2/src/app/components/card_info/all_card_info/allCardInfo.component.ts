import { Component, Input } from "@angular/core";
import { CardInfo } from "../../../type/CardInfo";
import { CommonModule } from '@angular/common';
import { allCardInfo } from "../../../data/AllCardInfo";

@Component({
    selector: 'all-card-info-root',
    standalone: true,
    imports : [CommonModule],
    templateUrl: './allCardInfo.component.html',
    styleUrl: './allCardInfo.component.sass'
})

export class AllCardInfoComponent {
    @Input() cardServices: CardInfo[] = allCardInfo;
}