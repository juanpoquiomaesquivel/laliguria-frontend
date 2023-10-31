export class ProductionRequest {

    Index: number;
    Id: number;
    RequestStatusId: number;
    RequestStatusName: string;
    RequestStatusDescription: string;
    RequestStatusColor: string;
    Registration: Date;

    constructor(Index: number, Id: number, RequestStatusId: number, RequestStatusName: string, RequestStatusDescription: string, RequestStatusColor: string, Registration: Date) {
        this.Index = Index;
        this.Id = Id;
        this.RequestStatusId = RequestStatusId;
        this.RequestStatusName = RequestStatusName;
        this.RequestStatusDescription = RequestStatusDescription;
        this.RequestStatusColor = RequestStatusColor;
        this.Registration = Registration;
    }
}