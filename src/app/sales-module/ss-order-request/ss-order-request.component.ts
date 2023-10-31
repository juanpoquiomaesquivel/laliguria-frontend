import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SsProductRequest } from 'src/app/Models/Sales/Product Request/ss-product-request.model';
import { SalesRequest } from 'src/app/Models/SalesRequest.model';
import { SalesService } from 'src/app/Services/sales.service';

@Component({
  selector: 'app-ss-order-request',
  templateUrl: './ss-order-request.component.html',
  styleUrls: ['./ss-order-request.component.css']
})
export class SsOrderRequestComponent {

  private productRequestList: SsProductRequest[];
  protected filteredProductRequestList: SsProductRequest[];

  constructor(private matDialog: MatDialog, private salesService: SalesService) { }

  ngOnInit(): void {
    this.salesService.onLoadProductRequestList().subscribe(
      (data) => {
        this.productRequestList = data;
        this.filteredProductRequestList = this.productRequestList;
      }
    );

    this.salesService.cancelProductRequest.subscribe(
      (id) => {
        this.salesService.onCancelProductRequest(id).subscribe(
          (data) => {
            this.productRequestList = data;
            this.filteredProductRequestList = this.productRequestList;
          }
        );
      }
    );
  }
}
