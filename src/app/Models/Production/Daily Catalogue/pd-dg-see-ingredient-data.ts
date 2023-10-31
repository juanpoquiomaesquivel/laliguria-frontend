export class PdDgSeeIngredientData {
    
    name: string;
    quantity: number;
    units: string;

    constructor(name: string, quantity: number, units: string) {
        this.name = name;
        this.quantity = quantity;
        this.units = units;
    }
}