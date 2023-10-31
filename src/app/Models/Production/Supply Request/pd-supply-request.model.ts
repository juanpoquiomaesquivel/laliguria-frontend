import { Status } from "../status.model";

export class PdSupplyRequest {

    index: number;
    id: number;
    status: Status | number;
    registration: Date;

    constructor(
        index: number,
        id: number,
        status: Status | number,
        registration: Date,
    ) {
        this.index = index;
        this.id = id;
        this.status = status;
        this.registration = registration;
    }
}