export class PdDgAdminOrderRequestData {

    index: number;
    id: number;
    customerName: string;
    registration: Date;
    status: number;

    constructor(index: number, id: number, customerName: string, registration: Date, status: number) {
        this.index = index;
        this.id = id;
        this.customerName = customerName;
        this.registration = registration;
        this.status = status;
    }
}