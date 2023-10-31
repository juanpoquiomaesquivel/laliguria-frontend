import { DgProductData } from "./DgProductData.model";

export class DgSalesRequestSeeData {

    ProductList: DgProductData[];
    CustomerInformation: JSON;
    RegistrationDateTime: Date;

    constructor(ProductList: DgProductData[], CustomerInformation: JSON, RegistrationDateTime: Date) {
        this.ProductList = ProductList;
        this.CustomerInformation = CustomerInformation;
        this.RegistrationDateTime = RegistrationDateTime;
    }
}