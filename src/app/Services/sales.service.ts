import { Injectable } from '@angular/core';
import { SalesInventoryItem } from '../Models/SalesIventoryItem.model';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

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

  prodRequests: SalesInventoryItem[] = [
    new SalesInventoryItem(1, 'cod1', 'a', 'desc', 'cc', null, 15, 24),
    new SalesInventoryItem(2, 'cod1', 'a', 'desc', 'cc', null, 15, 24),
    new SalesInventoryItem(3, 'cod1', 'a', 'desc', 'cc', null, 15, 24),
    new SalesInventoryItem(4, 'cod1', 'a', 'desc', 'cc', null, 15, 24),
    new SalesInventoryItem(5, 'cod1', 'a', 'desc', 'cc', null, 15, 24),
    new SalesInventoryItem(6, 'cod1', 'a', 'desc', 'cc', null, 15, 24),
    new SalesInventoryItem(7, 'cod1', 'a', 'desc', 'cc', null, 15, 24),
    new SalesInventoryItem(8, 'cod1', 'a', 'desc', 'cc', null, 15, 24),
  ];
}
