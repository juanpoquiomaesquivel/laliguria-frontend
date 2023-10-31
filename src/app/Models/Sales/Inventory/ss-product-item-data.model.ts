export class SsProductItemData {

    code: string;
    name: string;
    description: string;
    category: string;
    registration: Date;
    producedQuantity: number;
    available: number;

    constructor(
        code: string,
        name: string,
        description: string,
        category: string,
        registration: Date,
        producedQuantity: number,
        available: number
    ) {
        this.code = code;
        this.name = name;
        this.description = description;
        this.category = category;
        this.registration = registration;
        this.producedQuantity = producedQuantity;
        this.available = available;
    }
}