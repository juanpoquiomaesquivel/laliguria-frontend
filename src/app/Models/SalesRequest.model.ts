export class SalesRequest {

    Id: number;
    Registration: Date;
    ClientName: string;

    constructor(Id: number, Registration: Date, ClientName: string) {
        this.Id = Id;
        this.Registration = Registration;
        this.ClientName = ClientName;
    }
}