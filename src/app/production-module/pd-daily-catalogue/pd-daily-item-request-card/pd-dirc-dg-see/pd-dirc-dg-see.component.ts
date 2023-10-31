import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PdDgSeeIngredientData } from 'src/app/Models/Production/Daily Catalogue/pd-dg-see-ingredient-data';

@Component({
  selector: 'app-pd-dirc-dg-see',
  templateUrl: './pd-dirc-dg-see.component.html',
  styleUrls: ['./pd-dirc-dg-see.component.css']
})
export class PdDircDgSeeComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: PdDgSeeIngredientData[]) { }
}
