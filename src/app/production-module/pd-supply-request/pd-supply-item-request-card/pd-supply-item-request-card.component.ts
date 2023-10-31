import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductionService } from 'src/app/Services/production.service';
import { PdSircDgCancelComponent } from './pd-sirc-dg-cancel/pd-sirc-dg-cancel.component';
import { PdSircDgSeeComponent } from './pd-sirc-dg-see/pd-sirc-dg-see.component';
import { PdSrDgFormComponent } from '../pd-sr-dg-form/pd-sr-dg-form.component';
import { PdSupplyRequest } from 'src/app/Models/Production/Supply Request/pd-supply-request.model';

@Component({
  selector: 'app-pd-supply-item-request-card',
  templateUrl: './pd-supply-item-request-card.component.html',
  styleUrls: ['./pd-supply-item-request-card.component.css']
})
export class PdSupplyItemRequestCardComponent {

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

  @Input() request: PdSupplyRequest;

  constructor(private matDialog: MatDialog, private productionService: ProductionService) { }

  openSeeMoreDialog() {
    this.productionService.onLoadDgSeeSupplyDataList(this.request.id).subscribe(
      (seeData) => {
        this.matDialog.open(PdSircDgSeeComponent, {
          width: '350px',
          height: '450px',
          data: seeData
        });
      }
    );


  }

  openModifyRequestFormDialog() {
    this.productionService.onLoadDgAdminSupplyList(this.request.id).subscribe(
      (seeData) => {
        const dg = this.matDialog.open(PdSrDgFormComponent, {
          width: '350px',
          height: '450px',
          data: seeData
        });

        dg.afterClosed().subscribe(
          (response) => {
            if (response != undefined && response.length > 0) {
              this.productionService.callModifySupplyRequest(this.request.id, response.map(res => { return { id: res.id, quantity: res.requestedQuantity } }));
            }
          }
        );
      }
    );
  }

  openCancelRequestDialog() {
    const dialog = this.matDialog.open(PdSircDgCancelComponent, {
      width: '350px'
    });

    dialog.afterClosed().subscribe(result => {
      if (result) {
        this.productionService.callCancelSupplyRequest(this.request.id);
      }
    })
  }
}