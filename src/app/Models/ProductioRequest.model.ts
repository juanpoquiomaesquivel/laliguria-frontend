export class ProductionRequest {

    Id: number;
    RequestStatusId: number;
    RequestStatusName: string;
    RequestStatusDescription: string;
    RequestStatusColor: string;
    Registration: Date;
    Information: JSON;

    constructor(Id: number, RequestStatusId: number, RequestStatusName: string, RequestStatusDescription: string, RequestStatusColor: string, Registration: Date, Information: JSON) {
        this.Id = Id;
        this.RequestStatusId = RequestStatusId;
        this.RequestStatusName = RequestStatusName;
        this.RequestStatusDescription = RequestStatusDescription;
        this.RequestStatusColor = RequestStatusColor;
        this.Registration = Registration;
        this.Information = Information;
    }
}