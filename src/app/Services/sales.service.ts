import { EventEmitter, Injectable } from '@angular/core';
import { SalesInventoryItem } from '../Models/SalesInventoryItem.model';
import { SalesRequest } from '../Models/SalesRequest.model';
import { SsProductItemData } from '../Models/Sales/Inventory/ss-product-item-data.model';
import { Observable } from 'rxjs';
import { SsProductRequest } from '../Models/Sales/Product Request/ss-product-request.model';
import { RequestStatus } from '../Models/RequestStatus.model';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor() { }
  // general purposes

  status1 = new RequestStatus(1, 'Enviando', 'La solicitud se está enviando.', '1346ed');
  status2 = new RequestStatus(2, 'En espera', 'La solicitud aún no ha sido atendida.', 'f58300');
  status3 = new RequestStatus(3, 'En proceso', 'La solicitud está siendo atendida.', 'f58300');
  status4 = new RequestStatus(4, 'Atendido', 'La solicitud ha sido atendida.', '1cd446');
  status5 = new RequestStatus(5, 'Rechazado', 'La solicitud ha sido rechazada.', 'f2241d');
  status6 = new RequestStatus(6, 'Cancelado', 'La solicitud ha sido cancelada.', 'fbff2b');

  // Inventory

  productItemDataList: SsProductItemData[] = [
    new SsProductItemData('code 1', 'name 1', 'desc 1', 'cat 1', new Date('2017-05-12T16:45:36'), 45, 10),
    new SsProductItemData('code 2', 'name 1', 'desc 1', 'cat 1', new Date('2016-05-12T16:45:36'), 45, 10),
    new SsProductItemData('code 3', 'name 1', 'desc 1', 'cat 1', new Date('2019-05-12T16:45:36'), 45, 10),
    new SsProductItemData('code 4', 'name 1', 'desc 1', 'cat 1', new Date('2014-05-12T16:45:36'), 45, 10),
    new SsProductItemData('code 5', 'name 1', 'desc 1', 'cat 1', new Date('2015-05-12T16:45:36'), 45, 10),
  ];

  onLoadProductItemDataList(): Observable<SsProductItemData[]> {
    let obs = new Observable<SsProductItemData[]>((observer) => {
      observer.next(this.productItemDataList);
    });

    return obs;
  }

  // product request

  productRequestList: SsProductRequest[] = [
    new SsProductRequest(11, 1, new Date('1999-12-11T15:23:03'), 'cliente 1', this.status1),
    new SsProductRequest(12, 2, new Date('1999-12-11T15:23:03'), 'cliente 2', this.status2),
    new SsProductRequest(13, 3, new Date('1999-12-11T15:23:03'), 'cliente 3', this.status3),
    new SsProductRequest(14, 4, new Date('1999-12-11T15:23:03'), 'cliente 4', this.status4),
    new SsProductRequest(15, 5, new Date('1999-12-11T15:23:03'), 'cliente 5', this.status5),
  ];

  onLoadProductRequestList(): Observable<SsProductRequest[]> {
    let obs = new Observable<SsProductRequest[]>((observer) => {
      observer.next(this.productRequestList);
    });

    return obs;
  }
  
  cancelProductRequest: EventEmitter<number> = new EventEmitter<number>;

  callCancelProductRequest(productRequestId: number) {
    this.cancelProductRequest.emit(productRequestId);
  }

  onCancelProductRequest(productRequestId: number): Observable<SsProductRequest[]> {
    this.productRequestList.find((request) => request.id === productRequestId).status = this.status6;

    let obs = new Observable<SsProductRequest[]>((observer) => {
      observer.next(this.productRequestList);
    });

    return obs;
  }
}
