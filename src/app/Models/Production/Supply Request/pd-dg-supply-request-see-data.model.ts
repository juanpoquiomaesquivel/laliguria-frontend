export class PdDgSupplyRequestSeeData {

    name: string;
    description: string;
    requestedQuantity: number;

    constructor(name: string, description: string, requestedQuantity: number) {
        this.name = name;
        this.description = description;
        this.requestedQuantity = requestedQuantity;
    }
}