import { Injectable } from "@angular/core";
import { DESTINATIONS, DESCRIPTIONS, PRIX } from "../data/data";
import { Travel } from "../type/Travel";

@Injectable({
    providedIn:'root'
})

export class TravelsSerivce {
    private allTravels: Travel[] = [];

    createTravel(): Travel {
        const newTravel: Travel = {
            destination: DESTINATIONS[Math.floor(Math.random() * DESTINATIONS.length)],
            description: DESCRIPTIONS[Math.floor(Math.random() * DESCRIPTIONS.length)],
            prix: PRIX[Math.floor(Math.random() * PRIX.length)],
            id: this.createUniqueID()
        };
        return newTravel;
    }
    

    addTravel(travel: Travel) {
        this.allTravels.push(travel)
    }

    createUniqueID(): string {
        const id = Math.random().toString().replace('.', '');
        return id;
    }

    supprimerTravel(id: string) {
        this.allTravels = this.allTravels.filter(travel => travel.id !== id);
    }

}