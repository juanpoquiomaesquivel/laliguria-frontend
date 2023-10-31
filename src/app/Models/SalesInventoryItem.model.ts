export class SalesInventoryItem {

    Code: string;
    Name: string;
    Description: string;
    Category: string;
    ProductionDate: Date;
    ProducedQuantity: number;
    Available: number;

    constructor(Code: string, Name: string, Description: string, Category: string, ProductionDate: Date, ProducedQuantity: number, Available: number) {
        this.Code = Code;
        this.Name = Name;
        this.Description = Description;
        this.Category = Category;
        this.ProductionDate = ProductionDate;
        this.ProducedQuantity = ProducedQuantity;
        this.Available = Available;
    }
}