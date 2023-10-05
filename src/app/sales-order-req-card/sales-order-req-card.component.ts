import { Component, Input } from '@angular/core';
import { SalesRequest } from '../Models/SalesRequest.model';

@Component({
  selector: 'app-sales-order-req-card',
  templateUrl: './sales-order-req-card.component.html',
  styleUrls: ['./sales-order-req-card.component.css']
})
export class SalesOrderReqCardComponent {

  @Input() request: SalesRequest;
}
