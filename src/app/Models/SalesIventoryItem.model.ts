export class SalesInventoryItem {

    Id: number;
    Code: string;
    Name: string;
    Description: string;
    Category: string;
    Registration: Date;
    Received: number;
    Available: number;

    constructor(Id: number, Code: string, Name: string, Description: string, Category: string, Registration: Date, Received: number, Available: number) {
        this.Id = Id;
        this.Code = Code;
        this.Name = Name;
        this.Description = Description;
        this.Category = Category;
        this.Registration = Registration;
        this.Received = Received;
        this.Available = Available;
    }
}