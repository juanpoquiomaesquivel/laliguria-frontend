import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WhDgSupplyRequestSeeData } from 'src/app/Models/Warehouse/Supply Request/wh-dg-supply-request-see-data.model';

@Component({
  selector: 'app-wh-sirc-dg-see',
  templateUrl: './wh-sirc-dg-see.component.html',
  styleUrls: ['./wh-sirc-dg-see.component.css']
})
export class WhSircDgSeeComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: WhDgSupplyRequestSeeData[]) { }
}
