import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { PdDgSeeIngredientData } from 'src/app/Models/Production/Daily Catalogue/pd-dg-see-ingredient-data';
import { PdCustomerRequest } from 'src/app/Models/Production/Order Catalogue/pd-customer-request.model';
import { ProductionService } from 'src/app/Services/production.service';
import { PdDircDgSeeComponent } from 'src/app/production-module/pd-daily-catalogue/pd-daily-item-request-card/pd-dirc-dg-see/pd-dirc-dg-see.component';

@Component({
  selector: 'app-pd-customer-item-request-card',
  templateUrl: './pd-customer-item-request-card.component.html',
  styleUrls: ['./pd-customer-item-request-card.component.css']
})
export class PdCustomerItemRequestCardComponent {

  @Input() orderRequestId: number;
  @Input() request: PdCustomerRequest;

  protected getRequestStatusId() {
    return typeof this.request.status !== 'number' ? this.request.status.id : null;
  }

  protected getRequestStatusName() {
    return typeof this.request.status !== 'number' ? this.request.status.name : null;
  }

  protected getRequestStatusDescription() {
    return typeof this.request.status !== 'number' ? this.request.status.description : null;
  }

  protected getRequestStatusColorHex() {
    return typeof this.request.status !== 'number' ? this.request.status.colorHex : null;
  }

  constructor(private matDialog: MatDialog, private productionService: ProductionService) { }

  openSeeMoreDialog() {
    this.productionService.onLoadDgSeeIngredientDataList(this.request.productId).subscribe(
      (seeData) => {
        this.matDialog.open(PdDircDgSeeComponent, {
          width: '350px',
          data: seeData
        });
      }
    );
  }

  protected onStartButtonClick() {
    this.productionService.callStartCustomerRequest(this.orderRequestId, this.request.id);
  }

  protected onFinishButtonClick() {
    this.productionService.callFinishCustomerRequest(this.orderRequestId, this.request.id);
  }
}
