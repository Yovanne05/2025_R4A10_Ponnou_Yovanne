import { Component, Input, EventEmitter, Output } from "@angular/core";
import { Avis } from "../../../type/Avis";
import { allAvis } from "../../../data/AllAvis";

@Component({
    selector: 'switch-avis-root',
    standalone: true,
    templateUrl: './switch_avis.component.html',
    styleUrl: './switch_avis.component.sass'
})

export class SwitchAvisComponent {
    allAvis: Avis[] = allAvis;

    @Output() nextAvis = new EventEmitter<number>();

    emitNextAvis() {
        this.nextAvis.emit(1);
    }

    emitPreviousAvis() {
        this.nextAvis.emit(-1);
    }
}