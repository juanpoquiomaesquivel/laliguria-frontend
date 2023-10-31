import { Status } from "../status.model";

export class PdDailyRequest {

    index: number;
    id: number;
    productId: number;
    productName: string;
    productionInfo: string;
    status: Status | number;

    constructor(index: number, id: number, productId: number, productName: string, productionInfo: string, status: Status | number) {
        this.index = index;
        this.id = id;
        this.productId = productId;
        this.productName = productName;
        this.productionInfo = productionInfo;
        this.status = status;
    }
}