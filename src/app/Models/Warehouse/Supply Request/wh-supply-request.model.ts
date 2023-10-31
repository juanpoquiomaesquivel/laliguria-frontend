import { WhRequestSupplyStatus } from "./wh-supply-request-status.model";

export class WhSupplyRequest {

    index: number;
    id: number;
    status: WhRequestSupplyStatus | number;
    area: number;
    registration: Date;
    requester: string;

    constructor(
        index: number,
        id: number,
        status: WhRequestSupplyStatus | number,
        area: number,
        registration: Date,
        requester: string
    ) {
        this.index = index;
        this.id = id;
        this.status = status;
        this.area = area;
        this.registration = registration;
        this.requester = requester;
    }
}