import { DgSupplyData } from "./DgSupplyData.model";

export class DgProductionRequestSeeData {

    SupplyList: DgSupplyData[];

    constructor(SupplyList: DgSupplyData[]) {
        this.SupplyList = SupplyList;
    }
}