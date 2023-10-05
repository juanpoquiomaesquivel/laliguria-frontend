import { Component } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

export interface SeeMoreDialogData {
  name: string,
  quantity: number
}

@Component({
  selector: 'app-prod-supply-req-card-dg-see',
  templateUrl: './prod-supply-req-card-dg-see.component.html',
  styleUrls: ['./prod-supply-req-card-dg-see.component.css']
})
export class ProdSupplyReqCardDgSeeComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: SeeMoreDialogData[]) { }
}
