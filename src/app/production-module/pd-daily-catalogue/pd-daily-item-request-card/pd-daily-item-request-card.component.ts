import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductionService } from 'src/app/Services/production.service';
import { PdDircDgSeeComponent } from './pd-dirc-dg-see/pd-dirc-dg-see.component';
import { PdDailyRequest } from 'src/app/Models/Production/Daily Catalogue/pd-daily-request.model';
import { PdDgSeeIngredientData } from 'src/app/Models/Production/Daily Catalogue/pd-dg-see-ingredient-data';

@Component({
  selector: 'app-pd-daily-item-request-card',
  templateUrl: './pd-daily-item-request-card.component.html',
  styleUrls: ['./pd-daily-item-request-card.component.css']
})
export class PdDailyItemRequestCardComponent {

  @Input() request: PdDailyRequest;
  

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
    this.productionService.callStartDailyRequest(this.request.id);
  }

  protected onFinishButtonClick() {
    this.productionService.callFinishDailyRequest(this.request.id);
  }
}
