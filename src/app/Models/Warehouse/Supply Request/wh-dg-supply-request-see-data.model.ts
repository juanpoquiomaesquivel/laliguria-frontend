export class WhDgSupplyRequestSeeData {

    name: string;
    description: string;
    requestedQuantity: number;
    isEnough: boolean;

    constructor(name: string, description: string, requestedQuantity: number, isEnough: boolean) {
        this.name = name;
        this.description = description;
        this.requestedQuantity = requestedQuantity;
        this.isEnough = isEnough;
    }
}