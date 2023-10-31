import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductionService } from 'src/app/Services/production.service';
import { PdDcDgAdmComponent } from './pd-dc-dg-admin/pd-dc-dg-admin.component';
import { PdDailyRequest } from 'src/app/Models/Production/Daily Catalogue/pd-daily-request.model';

@Component({
  selector: 'app-pd-daily-catalogue',
  templateUrl: './pd-daily-catalogue.component.html',
  styleUrls: ['./pd-daily-catalogue.component.css']
})
export class PdDailyCatalogueComponent implements OnInit {

  protected onlyAwaiting: boolean = true;
  private dailyRequestList: PdDailyRequest[];
  protected filteredDailyRequestList: PdDailyRequest[];

  constructor(private matDialog: MatDialog, private productionService: ProductionService) { }

  private loading() {
    this.productionService.onLoadDailyRequestList().subscribe(
      (data) => {
        this.dailyRequestList = data;
        this.filteredDailyRequestList = this.filterDailyRequestList();
      }
    )
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

    this.productionService.startDailyRequest.subscribe(
      (id) => {
        this.productionService.onStartDailyRequest(id).subscribe(
          (msg) => {
          }
        );
      }
    );

    this.productionService.finishDailyRequest.subscribe(
      (id) => {
        this.productionService.onFinishDailyRequest(id).subscribe(
          (msg) => {
          }
        );
      }
    );
  }

  openAdminDialog() {
    this.matDialog.open(PdDcDgAdmComponent, {
      width: '415px',
      disableClose: true
    });
  }

  protected onOnlyAwaitingCheckboxchange() {
    this.filteredDailyRequestList = this.filterDailyRequestList();
  }

  private filterDailyRequestList() {
    let aux = this.dailyRequestList.slice();

    if (this.onlyAwaiting) {
      aux = aux.filter(
        (request) => {
          if (typeof request.status !== 'number') {
            return request.status.id === 2 || request.status.id === 3;
          }

          return false;
        }
      );
    }

    return aux;
  }
}
