import { EventEmitter, Injectable } from '@angular/core';
import { SupplyItemData } from '../Models/Warehouse/Inventory/supply-item-data.model';
import { Observable, map } from 'rxjs';
import { WhSupplyRequest } from '../Models/Warehouse/Supply Request/wh-supply-request.model';
import { RequestStatus } from '../Models/RequestStatus.model';
import { WhDgSupplyRequestSeeData } from '../Models/Warehouse/Supply Request/wh-dg-supply-request-see-data.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Message } from '../Models/message.model';
import { WhRequestSupplyStatus } from '../Models/Warehouse/Supply Request/wh-supply-request-status.model';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  constructor(private httpClient: HttpClient) {
    this.onLoadStatusList();
  }

  private baseURL: string = 'http://localhost:8081/warehouse';

  // Inventory

  onLoadSupplyItemDataList(): Observable<SupplyItemData[]> {
    return this.httpClient.get<SupplyItemData[]>(`${this.baseURL}/inventory/api/get/supply/all`);
  }

  // Supply Request

  statusList: WhRequestSupplyStatus[] = [];

  onLoadStatusList(): Observable<WhRequestSupplyStatus[]> {
    return this.httpClient.get<WhRequestSupplyStatus[]>(`${this.baseURL}/supply-request/api/get/status/all`);
  }

  onLoadSupplyRequestList(): Observable<WhSupplyRequest[]> {
    return this.httpClient.get<WhSupplyRequest[]>(`${this.baseURL}/supply-request/api/get/request/all`).pipe(
      map(
        (list) => {
          list.forEach((e) => {
            if (typeof e.status === 'number') {
              const status: WhRequestSupplyStatus = this.statusList.find((obj) => obj.id === e.status);
              e.status = status;
            }
          });

          return list;
        }
      )
    );
  }

  onLoadDgSupplyRequestSeeDataList(supplyRequestId: number): Observable<WhDgSupplyRequestSeeData[]> {
    return this.httpClient.get<WhDgSupplyRequestSeeData[]>(`${this.baseURL}/supply-request/api/get/request/${supplyRequestId}/see-data`);
  }


  acceptSupplyRequest: EventEmitter<number> = new EventEmitter<number>;
  finishSupplyRequest: EventEmitter<number> = new EventEmitter<number>;
  denySupplyRequest: EventEmitter<number> = new EventEmitter<number>;

  callAcceptSupplyRequest(supplyRequestId: number) {
    this.acceptSupplyRequest.emit(supplyRequestId);
  }

  onAcceptSupplyRequest(supplyRequestId: number): Observable<Message> {
    const headers = new HttpHeaders();
    const params = new HttpParams();
    params.set('SupplyRequestId', supplyRequestId);

    return this.httpClient.put<Message>(`${this.baseURL}/supply-request/api/put/request/${supplyRequestId}/accept`, params, { headers });
  }

  callFinishSupplyRequest(supplyRequestId: number) {
    this.finishSupplyRequest.emit(supplyRequestId);
  }

  onFinishSupplyRequest(supplyRequestId: number): Observable<Message> {
    const headers = new HttpHeaders();
    const params = new HttpParams();
    params.set('SupplyRequestId', supplyRequestId);

    return this.httpClient.put<Message>(`${this.baseURL}/supply-request/api/put/request/${supplyRequestId}/finish`, params, { headers });
  }

  callDenySupplyRequest(supplyRequestId: number) {
    this.denySupplyRequest.emit(supplyRequestId);
  }

  onDenySupplyRequest(supplyRequestId: number): Observable<Message> {
    const headers = new HttpHeaders();
    const params = new HttpParams();
    params.set('SupplyRequestId', supplyRequestId);

    return this.httpClient.put<Message>(`${this.baseURL}/supply-request/api/put/request/${supplyRequestId}/deny`, params, { headers });
  }
}
