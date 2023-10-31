export class RequestStatus {

    Id: number;
    Name: string;
    Description: string;
    ColorHex: string;

    constructor(Id: number, Name: string, Description: string, ColorHex: string) {
        this.Id = Id;
        this.Name = Name;
        this.Description = Description;
        this.ColorHex = ColorHex;
    }
}