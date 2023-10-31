import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PdSupplyRequest } from 'src/app/Models/Production/Supply Request/pd-supply-request.model';
import { ProductionService } from 'src/app/Services/production.service';
import { PdSrDgFormComponent } from './pd-sr-dg-form/pd-sr-dg-form.component';

@Component({
  selector: 'app-pd-supply-request',
  templateUrl: './pd-supply-request.component.html',
  styleUrls: ['./pd-supply-request.component.css']
})
export class PdSupplyRequestComponent {

  // filters 

  protected onlyAwaiting: boolean = true;

  private supplyRequestList: PdSupplyRequest[];
  protected filteredSupplyRequestList: PdSupplyRequest[];

  constructor(private matDialog: MatDialog, private productionService: ProductionService) { }

  private loading() {
    this.productionService.onLoadSupplyRequestList().subscribe(
      (data) => {
        this.supplyRequestList = data;
        this.filteredSupplyRequestList = this.filterSupplyRequestList();
      }
    );
  }

  ngOnInit(): void {
    if (this.productionService.statusList.length === 0) {
      this.productionService.onLoadStatusList().subscribe(
        (data) => {
          this.productionService.statusList = data;
          this.loading();
        }
      );
    } else {
      this.loading();
    }

    this.productionService.createSupplyRequest.subscribe(
      (suppInfo) => {
        this.productionService.onCreateSupplyRequest(1, suppInfo.map(res => { return { id: res.id, quantity: res.requestedQuantity } })).subscribe(
          (msg) => {
          }
        );
      }
    );

    this.productionService.modifySupplyRequest.subscribe(
      (modifiedData) => {
        this.productionService.onModifySupplyRequest(modifiedData[0], modifiedData[1]).subscribe(
          (msg) => {
          }
        );
      }
    );

    this.productionService.cancelSupplyRequest.subscribe(
      (id) => {
        this.productionService.onCancelSupplyRequest(id).subscribe(
          (msg) => {
          }
        );
      }
    );
  }

  onOnlyAwaitingCheckboxChange() {
    this.filteredSupplyRequestList = this.filterSupplyRequestList();
  }

  private filterSupplyRequestList() {
    let aux = this.supplyRequestList.slice();

    if (this.onlyAwaiting) {
      // aux = aux.filter((request) => request.status.Id === 2 || request.status.Id === 3);
    }

    return aux;
  }



  openNewRequestFormDialog() {
    const dg = this.matDialog.open(PdSrDgFormComponent, {
      width: '350px',
      height: '450px',
    });

    dg.afterClosed().subscribe(
      (response) => {
        if (response.length > 0) {
          this.productionService.callCreateSupplyRequest(response);
        }
      }
    );
  }
}
