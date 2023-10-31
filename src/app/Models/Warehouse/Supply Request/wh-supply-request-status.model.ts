export class WhRequestSupplyStatus {

    id: number;
    name: string;
    description: string;
    colorHex: string;

    constructor(id: number, name: string, description: string, colorHex: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.colorHex = colorHex;
    }
}