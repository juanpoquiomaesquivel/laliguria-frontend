export class SupplyItemData {

    code: string;
    name: string;
    description: string;
    provider: string;
    category: string;
    registration: Date;
    quantity: number;
    available: number;

    constructor(
        code: string,
        name: string,
        description: string,
        provider: string,
        category: string,
        registration: Date,
        quantity: number,
        available: number
    ) {
        this.code = code;
        this.name = name;
        this.description = description;
        this.provider = provider;
        this.category = category;
        this.registration = registration;
        this.quantity = quantity;
        this.available = available;
    }
}