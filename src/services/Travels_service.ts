import { DESTINATIONS, DESCRIPTIONS, PRIX } from "../data/data";
import { Travel } from "../type/Travel";

export class TravelsSerivce {
    private allTravels: Travel[] = [];

    createTravel(): Travel {
        const newTravel: Travel = {
            destination: DESTINATIONS[(Math.random() * DESCRIPTIONS.length)],
            description: DESCRIPTIONS[(Math.random() * DESCRIPTIONS.length)],
            prix: PRIX[(Math.random() * DESCRIPTIONS.length)],
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