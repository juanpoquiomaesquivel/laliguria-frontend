import { EventEmitter, Injectable } from '@angular/core';
import { ProductionRequest } from '../Models/ProductioRequest.model';

@Injectable({
  providedIn: 'root'
})
export class ProductionService {

  constructor() { }

  data = {
    name: 'John Doe',
    age: 30,
    address: {
      street: '123 Main St',
      city: 'Example City',
      zip: '12345'
    }
  };

  prodRequests: ProductionRequest[] = [
    new ProductionRequest(1, 2, 'En espera 1', 'desc 2', '000111', null, JSON.parse(JSON.stringify(this.data))),
    new ProductionRequest(2, 2, 'En espera 2', 'desc 2', '000111', null, null),
    new ProductionRequest(3, 2, 'En espera 3', 'desc 2', '000111', null, null),
    new ProductionRequest(4, 2, 'En espera 4', 'desc 2', '000111', null, null),
    new ProductionRequest(5, 2, 'En espera 5', 'desc 2', '000111', null, null),
    new ProductionRequest(6, 2, 'En espera 6', 'desc 2', '000111', null, null)
  ];

  OnLoadRequestList = new EventEmitter<ProductionRequest>();

  LoadRequestList(request: ProductionRequest) {
    this.OnLoadRequestList.emit(request);
  }

  DeleteRequest(id: number) {
    this.prodRequests.splice(this.prodRequests.findIndex(item => item.Id === id), 1);
  }
}
