import { Component } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

export interface RequestFormDialogData {
  name: string,
  quantity: number
}

@Component({
  selector: 'app-prod-supply-req-card-dg-freq',
  templateUrl: './prod-supply-req-card-dg-freq.component.html',
  styleUrls: ['./prod-supply-req-card-dg-freq.component.css']
})
export class ProdSupplyReqCardDgFreqComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: RequestFormDialogData[]) { }
}
