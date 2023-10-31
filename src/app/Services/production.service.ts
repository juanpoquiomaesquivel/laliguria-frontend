import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PdDailyRequest } from '../Models/Production/Daily Catalogue/pd-daily-request.model';
import { PdDgAdminCategory } from '../Models/Production/Daily Catalogue/pd-dg-admin-category';
import { PdDgAdminDailyRequestData } from '../Models/Production/Daily Catalogue/pd-dg-admin-daily-request-data.model';
import { PdDgSeeIngredientData } from '../Models/Production/Daily Catalogue/pd-dg-see-ingredient-data';
import { PdCustomerRequest } from '../Models/Production/Order Catalogue/pd-customer-request.model';
import { PdDgAdminOrderRequestData } from '../Models/Production/Order Catalogue/pd-dg-admin-order-request-data.model';
import { PdOrderRequest } from '../Models/Production/Order Catalogue/pd-order-request.model';
import { PdDgAdminSupplyOption } from '../Models/Production/Supply Request/pd-dg-admin-supply-option.model';
import { PdDgAdminSupply } from '../Models/Production/Supply Request/pd-dg-admin-supply.model';
import { PdDgSupplyRequestSeeData } from '../Models/Production/Supply Request/pd-dg-supply-request-see-data.model';
import { PdSupplyRequestStatus } from '../Models/Production/Supply Request/pd-supply-request-status.model';
import { PdSupplyRequest } from '../Models/Production/Supply Request/pd-supply-request.model';
import { Status } from '../Models/Production/status.model';
import { Message } from '../Models/message.model';

interface ModifyData {
  supplyRequestId: number,
  supplyInfo: PdDgAdminSupply[]
}

@Injectable({
  providedIn: 'root'
})
export class ProductionService {

  constructor(private httpClient: HttpClient) {
  }

  private baseURL: string = 'http://localhost:8081/production';

  // general purposes

  statusList: Status[] = [];

  onLoadStatusList(): Observable<Status[]> {
    return this.httpClient.get<Status[]>(`${this.baseURL}/supply-request/api/get/status/all`);
  } // ok

  /* DAILY CATALOGUE */

  // admin

  onLoadDgAdminCategoryList(): Observable<PdDgAdminCategory[]> {
    return this.httpClient.get<PdDgAdminCategory[]>(`${this.baseURL}/daily-catalogue/api/get/admin/category/all`);
  } // ok

  onLoadDgAdminDailyRequestDataList(): Observable<PdDgAdminDailyRequestData[]> {
    return this.httpClient.get<PdDgAdminDailyRequestData[]>(`${this.baseURL}/daily-catalogue/api/get/admin/order/all`);
  } // ok

  // requests

  onLoadDailyRequestList(): Observable<PdDailyRequest[]> {
    return this.httpClient.get<PdDailyRequest[]>(`${this.baseURL}/daily-catalogue/api/get/order/all`).pipe(
      map(
        (list) => {
          list.forEach((e) => {
            if (typeof e.status === 'number') {
              const status: Status = this.statusList.find((obj) => obj.id === e.status);
              e.status = status;
            }
          });

          return list;
        }
      )
    );
  } // ok

  onLoadDgSeeIngredientDataList(productId: number): Observable<PdDgSeeIngredientData[]> {
    return this.httpClient.get<PdDgSeeIngredientData[]>(`${this.baseURL}/daily-catalogue/api/get/order/product/${productId}/see-data`);
  } // ok

  startDailyRequest: EventEmitter<number> = new EventEmitter<number>;
  finishDailyRequest: EventEmitter<number> = new EventEmitter<number>;

  callStartDailyRequest(dailyRequestId: number) {
    this.startDailyRequest.emit(dailyRequestId);
  } // ok

  onStartDailyRequest(dailyRequestId: number): Observable<Message> {
    const headers = new HttpHeaders();

    return this.httpClient.put<Message>(`${this.baseURL}/daily-catalogue/api/put/order/${dailyRequestId}/start`, { headers });
  } // ok

  callFinishDailyRequest(dailyRequestId: number) {
    this.finishDailyRequest.emit(dailyRequestId);
  } // ok

  onFinishDailyRequest(dailyRequestId: number): Observable<Message> {
    const headers = new HttpHeaders();

    return this.httpClient.put<Message>(`${this.baseURL}/daily-catalogue/api/put/order/${dailyRequestId}/finish`, { headers });
  } // ok

  /* ORDER CATALOGUE */

  // admin

  onLoadDgAdminOrderRequestDataList(): Observable<PdDgAdminOrderRequestData[]> {
    return this.httpClient.get<PdDgAdminOrderRequestData[]>(`${this.baseURL}/order-catalogue/api/get/admin/order/all`);
  } // ok

  // requests

  onLoadOrderRequestList(): Observable<PdOrderRequest[]> {
    return this.httpClient.get<PdOrderRequest[]>(`${this.baseURL}/order-catalogue/api/get/order/all`).pipe(
      map(
        (list) => {
          list.forEach((e) => {
            if (typeof e.status === 'number') {
              const status: Status = this.statusList.find((obj) => obj.id === e.status);
              e.status = status;
            }
          });

          return list;
        }
      )
    );
  } // ok

  onLoadCustomerRequestList(orderRequestId: number): Observable<PdCustomerRequest[]> {
    return this.httpClient.get<PdCustomerRequest[]>(`${this.baseURL}/order-catalogue/api/get/order/${orderRequestId}/product/all`).pipe(
      map(
        (list) => {
          list.forEach((e) => {
            if (typeof e.status === 'number') {
              const status: Status = this.statusList.find((obj) => obj.id === e.status);
              e.status = status;
            }
          });

          return list;
        }
      )
    );
  } // ok

  startCustomerRequest: EventEmitter<number[]> = new EventEmitter<number[]>;
  finishCustomerRequest: EventEmitter<number[]> = new EventEmitter<number[]>;

  callStartCustomerRequest(orderRequestId: number, customerRequestId: number) {
    this.startCustomerRequest.emit([orderRequestId, customerRequestId]);
  } // ok

  onStartCustomerRequest(orderRequestId: number, customerRequestId: number): Observable<Message> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.httpClient.put<Message>(`${this.baseURL}/order-catalogue/api/put/order/${orderRequestId}/product/${customerRequestId}/start`, { headers });
  } // ok

  callFinishCustomerRequest(orderRequestId: number, customerRequestId: number) {
    this.finishCustomerRequest.emit([orderRequestId, customerRequestId]);
  } // ok

  onFinishCustomerRequest(orderRequestId: number, customerRequestId: number): Observable<Message> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.httpClient.put<Message>(`${this.baseURL}/order-catalogue/api/put/order/${orderRequestId}/product/${customerRequestId}/finish`, { headers });
   } // ok


  /* SUPPLY REQUEST (OK) */

  onLoadDgAdminSupplyOptionList(): Observable<PdDgAdminSupplyOption[]> {
    return this.httpClient.get<PdDgAdminSupplyOption[]>(`${this.baseURL}/supply-request/api/get/form/supply-option/all`);
  } // ok

  createSupplyRequest: EventEmitter<PdDgAdminSupply[]> = new EventEmitter<PdDgAdminSupply[]>;

  callCreateSupplyRequest(supplyInfo: PdDgAdminSupply[]) {
    this.createSupplyRequest.emit(supplyInfo);
  } // ok

  onCreateSupplyRequest(area: number, provisions: { id: number, quantity: number }[]): Observable<Message> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const information = {
      area: area,
      provisions: provisions
    }

    return this.httpClient.post<Message>(`${this.baseURL}/supply-request/api/post/request/create`, JSON.stringify(information), { headers });
  } // ok

  onLoadSupplyRequestList(): Observable<PdSupplyRequest[]> {
    return this.httpClient.get<PdSupplyRequest[]>(`${this.baseURL}/supply-request/api/get/request/all`).pipe(
      map(
        (list) => {
          list.forEach((e) => {
            if (typeof e.status === 'number') {
              const status: PdSupplyRequestStatus = this.statusList.find((obj) => obj.id === e.status);
              e.status = status;
            }
          });

          return list;
        }
      )
    );
  } // ok

  onLoadDgSeeSupplyDataList(supplyRequestId: number): Observable<PdDgSupplyRequestSeeData[]> {
    return this.httpClient.get<PdDgSupplyRequestSeeData[]>(`${this.baseURL}/supply-request/api/get/request/${supplyRequestId}/see-data`);
  } // ok

  modifySupplyRequest: EventEmitter<any[]> = new EventEmitter<any[]>;
  cancelSupplyRequest: EventEmitter<number> = new EventEmitter<number>;

  callModifySupplyRequest(supplyRequestId: number, provisions: PdDgAdminSupply[]) {
    this.modifySupplyRequest.emit([supplyRequestId, provisions]);
  } // ok

  onLoadDgAdminSupplyList(supplyRequestId: number): Observable<PdDgAdminSupply[]> {
    return this.httpClient.get<PdDgAdminSupply[]>(`${this.baseURL}/supply-request/api/get/form/request/${supplyRequestId}/supply/all`);
  } // ok

  onModifySupplyRequest(supplyRequestId: number, provisions: { id: number, quantity: number }[]): Observable<Message> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.httpClient.put<Message>(`${this.baseURL}/supply-request/api/put/request/${supplyRequestId}/modify`, JSON.stringify(provisions), { headers });
  } // ok

  callCancelSupplyRequest(supplyRequestId: number) {
    this.cancelSupplyRequest.emit(supplyRequestId);
  } // ok

  onCancelSupplyRequest(supplyRequestId: number): Observable<Message> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put<Message>(`${this.baseURL}/supply-request/api/put/request/${supplyRequestId}/cancel`, { headers });
  } // ok
}
