import { Component } from '@angular/core';
import { PdDgAdminCategory } from 'src/app/Models/Production/Daily Catalogue/pd-dg-admin-category';
import { PdDgAdminOrderRequestData } from 'src/app/Models/Production/Order Catalogue/pd-dg-admin-order-request-data.model';
import { ProductionService } from 'src/app/Services/production.service';

@Component({
  selector: 'app-pd-oc-dg-admin',
  templateUrl: './pd-oc-dg-admin.component.html',
  styleUrls: ['./pd-oc-dg-admin.component.css']
})
export class PdOcDgAdminComponent {

  private dgAdminOrderRequestDataList: PdDgAdminOrderRequestData[];
  protected filteredDgAdminOrderRequestDataList: PdDgAdminOrderRequestData[];
  protected selectedCategory: number = 0;

  constructor(private productionService: ProductionService) { }

  ngOnInit(): void {
    this.productionService.onLoadDgAdminOrderRequestDataList().subscribe(
      (data) => {
        this.dgAdminOrderRequestDataList = data;
        this.filteredDgAdminOrderRequestDataList = this.dgAdminOrderRequestDataList;
      }
    );
  }
}
