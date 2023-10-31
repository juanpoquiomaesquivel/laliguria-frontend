export class DgSupplyData {
    Name: string;
    Quantity: number;
    Units: string;

    constructor(Name: string, Quantity: number, Units: string) {
        this.Name = Name;
        this.Quantity = Quantity;
        this.Units = Units;
    }
}