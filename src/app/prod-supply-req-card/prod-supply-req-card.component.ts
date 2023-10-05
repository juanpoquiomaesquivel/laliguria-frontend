import { Component, Input } from '@angular/core';
import { ProductionRequest } from '../Models/ProductioRequest.model';
import { ProductionService } from '../Services/production.service';
import { MatDialog } from '@angular/material/dialog';
import { ProdSupplyReqCardDgSeeComponent } from '../prod-supply-req-card-dg-see/prod-supply-req-card-dg-see.component';
import { ProdSupplyReqCardDgFreqComponent } from '../prod-supply-req-card-dg-freq/prod-supply-req-card-dg-freq.component';
import { ProdSupplyReqCardDgCreqComponent } from '../prod-supply-req-card-dg-creq/prod-supply-req-card-dg-creq.component';

@Component({
  selector: 'app-prod-supply-req-card',
  templateUrl: './prod-supply-req-card.component.html',
  styleUrls: ['./prod-supply-req-card.component.css']
})
export class ProdSupplyReqCardComponent {

  @Input() request: ProductionRequest;

  constructor(private matDialog: MatDialog, private prodService: ProductionService) { }

  openSeeMoreDialog() {
    this.matDialog.open(ProdSupplyReqCardDgSeeComponent, {
      width: '350px',
      height: '450px',
      data: [{ name: 'Detergente', quantity: 50 }]
    });
  }

  openUpdateRequestFormDialog(operation: number) {
    this.matDialog.open(ProdSupplyReqCardDgFreqComponent, {
      width: '350px',
      height: '450px',
      data: [{ name: 'Detergente', quantity: 50 }]
    })
  }

  openCancelRequestDialog() {
    const dialog = this.matDialog.open(ProdSupplyReqCardDgCreqComponent, {
      width: '350px'
    });

    dialog.afterClosed().subscribe(result => {
      if (result) {
        this.prodService.DeleteRequest(this.request.Id)
      }
    })
  }
}