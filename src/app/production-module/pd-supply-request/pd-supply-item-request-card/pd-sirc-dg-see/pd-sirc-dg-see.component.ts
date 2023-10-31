import { Component } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DgProductionRequestSeeData } from 'src/app/Models/Production/DgProductionRequestSeeData.model';
import { PdDgSupplyRequestSeeData } from 'src/app/Models/Production/Supply Request/pd-dg-supply-request-see-data.model';

@Component({
  selector: 'app-pd-sirc-dg-see',
  templateUrl: './pd-sirc-dg-see.component.html',
  styleUrls: ['./pd-sirc-dg-see.component.css']
})
export class PdSircDgSeeComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: PdDgSupplyRequestSeeData[]) { }
}
