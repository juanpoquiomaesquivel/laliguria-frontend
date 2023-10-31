import { Component } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { PdDgAdminSupply } from 'src/app/Models/Production/Supply Request/pd-dg-admin-supply.model';
import { ProductionService } from 'src/app/Services/production.service';
import { PdDgAdminSupplyOption } from 'src/app/Models/Production/Supply Request/pd-dg-admin-supply-option.model';

@Component({
  selector: 'app-pd-sr-dg-form',
  templateUrl: './pd-sr-dg-form.component.html',
  styleUrls: ['./pd-sr-dg-form.component.css']
})
export class PdSrDgFormComponent {

  protected dgAdminSupplyOptionList: PdDgAdminSupplyOption[];
  protected dgAdminSupplyList: PdDgAdminSupply[] = [];

  private selectedSupplyId: number = 1;
  protected quantity: number = 1;

  constructor(@Inject(MAT_DIALOG_DATA) public data: PdDgAdminSupply[], private productionService: ProductionService) { }

  ngOnInit(): void {
    if (this.data != undefined) {
      this.dgAdminSupplyList = this.data;
    }

    this.productionService.onLoadDgAdminSupplyOptionList().subscribe(
      (data) => {
        this.dgAdminSupplyOptionList = data;
      }
    );
  }

  onSupplyOptionSelectChange(event: Event) {
    this.selectedSupplyId = parseInt((<HTMLSelectElement>event.target).value, 10);
  }

  onAddButtonClick() {
    console.log(this.selectedSupplyId)
    let flag = this.dgAdminSupplyList.find((supply) => supply.id === this.selectedSupplyId);

    if (flag === undefined) {
      let supply = this.dgAdminSupplyOptionList.find((supply) => supply.id === this.selectedSupplyId);
      let obj = new PdDgAdminSupply(supply.id, supply.name, supply.description, this.quantity);
  
      this.dgAdminSupplyList.push(obj);
    } else {
      flag.requestedQuantity = this.quantity;
    }
  }

  onRemoveButtonClick(supplyId: number) {
    this.dgAdminSupplyList = this.dgAdminSupplyList.filter((supply) => supply.id !== supplyId);
  }
}
