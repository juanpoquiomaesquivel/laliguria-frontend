import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DgSalesRequestSeeData } from 'src/app/Models/Sales/DgSalesRequestSeeData.model';

@Component({
  selector: 'app-ss-oirc-dg-see',
  templateUrl: './ss-oirc-dg-see.component.html',
  styleUrls: ['./ss-oirc-dg-see.component.css']
})
export class SsOircDgSeeComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DgSalesRequestSeeData) { }
}
