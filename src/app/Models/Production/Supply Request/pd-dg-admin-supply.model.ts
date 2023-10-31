export class PdDgAdminSupply {

    id: number;
    name: string;
    description: string;
    requestedQuantity: number;

    constructor(id: number, name: string, description: string, requestedQuantity: number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.requestedQuantity = requestedQuantity;
    }
}