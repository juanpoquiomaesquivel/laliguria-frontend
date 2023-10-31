import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WhSupplyRequest } from 'src/app/Models/Warehouse/Supply Request/wh-supply-request.model';
import { Message } from 'src/app/Models/message.model';
import { WarehouseService } from 'src/app/Services/warehouse.service';
import { WebSocketService } from 'src/app/Services/web-socket.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

type SortDirection = 'asc' | 'desc';

@Component({
  selector: 'app-wh-supply-request',
  templateUrl: './wh-supply-request.component.html',
  styleUrls: ['./wh-supply-request.component.css']
})
export class WhSupplyRequestComponent {

  private supplyRequestList: WhSupplyRequest[];
  protected filteredSupplyRequestList: WhSupplyRequest[];

  protected isLoading = false;
  protected isEmpty = true;

  protected sortDirection: SortDirection = 'desc';
  protected areas: any[] = [
    { label: 'área 1', checked: false },
    { label: 'área 2', checked: false },
    { label: 'área 3', checked: false },
    { label: 'área 4', checked: false },
  ];
  protected onlyAwaiting: boolean = true;

  sendMessage() {
    //this.webSocket.sendMessage(new Message(101, 'Mensajito'));
  }

  constructor(private matDialog: MatDialog, private matSnackBar: MatSnackBar, private warehouseService: WarehouseService/*, private webSocket: WebSocketService*/) { }

  private loading() {
    this.warehouseService.onLoadSupplyRequestList().subscribe(
      (data) => {
        this.supplyRequestList = data;
        this.filteredSupplyRequestList = this.filterSupplyRequestList();
        this.isLoading = false;
        this.isEmpty = (this.supplyRequestList.length === 0);
      }
    );
  }

  ngOnInit(): void {
    /*this.webSocket.updateView.subscribe(
      () => {
        this.warehouseService.onLoadSupplyRequestList().subscribe(
          (data) => {
            this.supplyRequestList = data;
            this.filteredSupplyRequestList = this.filterSupplyRequestList();
          }
        );
      }
    );*/
    this.isLoading = true;
    if (this.warehouseService.statusList.length === 0) {
      this.warehouseService.onLoadStatusList().subscribe(
        (data) => {
          this.warehouseService.statusList = data;
          this.loading();
        }
      );
    } else {
      this.loading();
    }

    this.warehouseService.acceptSupplyRequest.subscribe((supplyRequesId) => {
      this.warehouseService.onAcceptSupplyRequest(supplyRequesId).subscribe(
        (msg) => {
          this.matSnackBar.open(msg.description, '', { duration: 4000 });
        }
      );
    });

    this.warehouseService.finishSupplyRequest.subscribe((supplyRequesId) => {
      this.warehouseService.onFinishSupplyRequest(supplyRequesId).subscribe(
        (msg) => {
          this.matSnackBar.open(msg.description, '', { duration: 4000 });
        }
      );
    });

    this.warehouseService.denySupplyRequest.subscribe((supplyRequesId) => {
      this.warehouseService.onDenySupplyRequest(supplyRequesId).subscribe(
        (msg) => {
          this.matSnackBar.open(msg.description, '', { duration: 4000 });
        }
      );
    });
  }

  protected onSortDirectionRadioChange(sortDirection: SortDirection) {
    this.isLoading = true;
    this.sortDirection = sortDirection;
    this.filteredSupplyRequestList = this.filterSupplyRequestList();
    this.isLoading = false;
  }

  protected onAreaCheckboxChange() {
    this.isLoading = true;
    this.filteredSupplyRequestList = this.filterSupplyRequestList();
    this.isLoading = false;
  }

  protected onOnlyAwaitingCheckboxchange() {
    this.isLoading = true;
    this.filteredSupplyRequestList = this.filterSupplyRequestList();
    this.isLoading = false;
  }

  private filterSupplyRequestList(): WhSupplyRequest[] {
    let aux: WhSupplyRequest[] = [];
    let count = 0;

    for (let i = 0; i < this.areas.length; i++) {
      if (this.areas[i].checked) {
        aux = aux.concat(this.supplyRequestList.filter((request) => request.area === (i + 1)));
        count++;
      }
    }

    if (count === 0) {
      aux = this.supplyRequestList.slice();
    }

    if (this.onlyAwaiting) {
      aux = aux.filter(
        (request) => {
          if (typeof request.status !== 'number') {
            return request.status.id === 2 || request.status.id === 3
          }

          return false;
        }
      );
    }

    aux = aux.sort(
      (a, b) => {
        const isAsc = this.sortDirection === 'asc';

        return compare(a.registration, b.registration, isAsc);
      }
    );

    return aux;
  }

  openNewRequestFormDialog() {
    this.matDialog.open(null, {
      width: '350px',
      height: '450px',
      data: [
      ]
    })
  }
}

function compare(a: number | string | Date, b: number | string | Date, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}