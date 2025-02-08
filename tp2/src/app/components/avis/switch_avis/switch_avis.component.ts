import { Component, Input } from "@angular/core";
import { Avis } from "../../../type/Avis";
import { allAvis } from "../../../data/AllAvis";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'switch-avis-root',
    standalone: true,
    imports : [CommonModule],
    templateUrl: './switch_avis.component.html',
    styleUrl: './switch_avis.component.sass'
})

export class SwitchAvisComponent {
    allAvis: Avis[] = allAvis;
    @Input() numPoints: number = this.allAvis.length;

    get pointsArray() {
        return new Array(this.numPoints);
    }
    
}