export class PdDgAdminDailyRequestData {

    index: number;
    productName: string;
    productionInfo: string;
    categoryId: number;

    constructor(index: number, productName: string, productionInfo: string, categoryId: number) {
        this.index = index;
        this.productName = productName;
        this.productionInfo = productionInfo;
        this.categoryId = categoryId;
    }
}