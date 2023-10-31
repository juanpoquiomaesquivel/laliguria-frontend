import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductionService } from 'src/app/Services/production.service';
import { PdOcDgAdminComponent } from './pd-oc-dg-admin/pd-oc-dg-admin.component';
import { PdOrderRequest } from 'src/app/Models/Production/Order Catalogue/pd-order-request.model';

@Component({
  selector: 'app-pd-order-catalogue',
  templateUrl: './pd-order-catalogue.component.html',
  styleUrls: ['./pd-order-catalogue.component.css']
})
export class PdOrderCatalogueComponent implements OnInit {

  private orderRequestList: PdOrderRequest[];
  protected filteredOrderRequestList: PdOrderRequest[];
  protected onlyAwaiting: boolean = true;

  constructor(private matDialog: MatDialog, private productionService: ProductionService) { }

  private loading() {
    this.productionService.onLoadOrderRequestList().subscribe(
      (data) => {
        this.orderRequestList = data;

        this.orderRequestList.forEach(element => {
          this.productionService.onLoadCustomerRequestList(element.id).subscribe(
            (customerData) => {
              element.customerRequestList = customerData;
            }
          );
        });

        setTimeout(
          () => {
            this.filteredOrderRequestList = this.filterOrderRequestList();
          }, 1000
        );
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

    this.productionService.startCustomerRequest.subscribe(
      (arr) => {
        this.productionService.onStartCustomerRequest(arr[0], arr[1]).subscribe(
          (data) => {
          }
        );
      }
    );

    this.productionService.finishCustomerRequest.subscribe(
      (arr) => {
        this.productionService.onFinishCustomerRequest(arr[0], arr[1]).subscribe(
          (data) => {
          }
        );
      }
    );
  }

  openAdminDialog() {
    this.matDialog.open(PdOcDgAdminComponent, {
      width: '415px',
      //data: this.productionService.arrDgAdmCustomerOrderData
    });
  }

  protected onOnlyAwaitingCheckboxChange() {
    this.filteredOrderRequestList = this.filterOrderRequestList();
  }

  private filterOrderRequestList() {
    let aux = this.orderRequestList.slice();

    if (this.onlyAwaiting) {
      // aux = aux.filter((request) => request.status.Id === 2 || request.status.Id === 3);
    }

    return aux;
  }
}
