import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DgProductData } from 'src/app/Models/Sales/DgProductData.model';
import { DgSalesRequestSeeData } from 'src/app/Models/Sales/DgSalesRequestSeeData.model';
import { SalesRequest } from 'src/app/Models/SalesRequest.model';
import { SalesService } from 'src/app/Services/sales.service';
import { SsOircDgSeeComponent } from './ss-oirc-dg-see/ss-oirc-dg-see.component';
import { SsOrDgFormComponent } from '../ss-or-dg-form/ss-or-dg-form.component';
import { SsProductRequest } from 'src/app/Models/Sales/Product Request/ss-product-request.model';
import { SsOircDgCancelComponent } from './ss-oirc-dg-cancel/ss-oirc-dg-cancel.component';

@Component({
  selector: 'app-ss-order-item-request-card',
  templateUrl: './ss-order-item-request-card.component.html',
  styleUrls: ['./ss-order-item-request-card.component.css']
})
export class SsOrderItemRequestCardComponent {

  @Input() request: SsProductRequest;

  constructor(private matDialog: MatDialog, private salesService: SalesService) { }

  protected showTimeWithFormat(date: Date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();

    let lblHh = (hours - 12 >= 10 ? (hours - 12).toString() : '0' + (hours - 12).toString());
    let lblMm = (minutes >= 10 ? minutes.toString() : '0' + minutes.toString());

    return lblHh + ':' + lblMm + (hours >= 12 ? ' PM' : ' AM');
  }

  arr = [
    new DgProductData('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 12, 'u'),
    new DgProductData('a', 12, 'u'),
    new DgProductData('a', 12, 'u'),
    new DgProductData('a', 12, 'u'),
    new DgProductData('a', 12, 'u'),
    new DgProductData('a', 12, 'u'),
    new DgProductData('a', 12, 'u'),
    new DgProductData('a', 12, 'u'),
  ]

  openSeeMoreDialog() {
    this.matDialog.open(SsOircDgSeeComponent, {
      width: '350px',
      data: new DgSalesRequestSeeData(this.arr, null, new Date('1998-12-01-T22:11:23'))
    });
  }

  openUpdateRequestFormDialog(operation: number) {
    this.matDialog.open(SsOrDgFormComponent, {
      width: '350px',
      height: '450px',
      data: [{ name: 'Detergente', quantity: 50 }]
    })
  }

  openCancelRequestDialog() {
    const dg = this.matDialog.open(SsOircDgCancelComponent, {
      width: '350px'
    });

    dg.afterClosed().subscribe(result => {
      if (result) {
        this.salesService.callCancelProductRequest(this.request.id);
      }
    })
  }
}
