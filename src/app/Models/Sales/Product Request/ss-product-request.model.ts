import { RequestStatus } from "../../RequestStatus.model";

export class SsProductRequest {

    index: number;
    id: number;
    registration: Date;
    customer: string;
    status: RequestStatus;

    constructor(
        index: number,
        id: number,
        registration: Date,
        customer: string,
        status: RequestStatus
    ) {
        this.index = index;
        this.id = id;
        this.registration = registration;
        this.customer = customer;
        this.status = status;
    }
}