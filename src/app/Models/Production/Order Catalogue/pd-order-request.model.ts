import { RequestStatus } from "../../RequestStatus.model";
import { Status } from "../status.model";
import { PdCustomerRequest } from "./pd-customer-request.model";

export class PdOrderRequest {

    index: number;
    id: number;
    productionInfo: string;
    customerRequestList?: PdCustomerRequest[];
    status: Status | number;

    constructor(index: number, id: number, productionInfo: string, customerRequestList: PdCustomerRequest[], status: Status | number) {
        this.index = index;
        this.id = id;
        this.productionInfo = productionInfo;
        this.customerRequestList = customerRequestList;
        this.status = status;
    }
}