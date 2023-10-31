import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WhSupplyRequest } from 'src/app/Models/Warehouse/Supply Request/wh-supply-request.model';
import { WarehouseService } from 'src/app/Services/warehouse.service';
import { WhSircDgSeeComponent } from './wh-sirc-dg-see/wh-sirc-dg-see.component';
import { WhSircDgAcceptComponent } from './wh-sirc-dg-accept/wh-sirc-dg-accept.component';
import { WhSircDgDenyComponent } from './wh-sirc-dg-deny/wh-sirc-dg-deny.component';

@Component({
  selector: 'app-wh-supply-item-request-card',
  templateUrl: './wh-supply-item-request-card.component.html',
  styleUrls: ['./wh-supply-item-request-card.component.css']
})
export class WhSupplyItemRequestCardComponent {
  @Input() request: WhSupplyRequest;

  constructor(private matDialog: MatDialog, private warehouseService: WarehouseService) { }

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

  protected openSeeMoreDialog() {
    this.warehouseService.onLoadDgSupplyRequestSeeDataList(this.request.id).subscribe(
      (supplyRequestSeeData) => {
        this.matDialog.open(WhSircDgSeeComponent, {
          width: '350px',
          height: '450px',
          data: supplyRequestSeeData
        });
      }
    );
  }

  protected openAcceptSupplyRequestDialog() {
    const dg = this.matDialog.open(WhSircDgAcceptComponent, {
      width: '300px'
    });

    dg.afterClosed().subscribe(result => {
      if (result) {
        this.warehouseService.callAcceptSupplyRequest(this.request.id);
      }
    })
  }

  protected openFinishSupplyRequestDialog() {
    const dg = this.matDialog.open(WhSircDgAcceptComponent, {
      width: '300px'
    });

    dg.afterClosed().subscribe(result => {
      if (result) {
        this.warehouseService.callFinishSupplyRequest(this.request.id);
      }
    })
  }

  protected openDenySupplyRequestDialog() {
    const dg = this.matDialog.open(WhSircDgDenyComponent, {
      width: '300px'
    });

    dg.afterClosed().subscribe(result => {
      if (result) {
        this.warehouseService.callDenySupplyRequest(this.request.id);
      }
    })
  }
}
