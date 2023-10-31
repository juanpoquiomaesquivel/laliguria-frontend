import { Component, OnInit } from '@angular/core';
import { PdDgAdminCategory } from 'src/app/Models/Production/Daily Catalogue/pd-dg-admin-category';
import { PdDgAdminDailyRequestData } from 'src/app/Models/Production/Daily Catalogue/pd-dg-admin-daily-request-data.model';
import { ProductionService } from 'src/app/Services/production.service';

export interface ProductCardData {
  index: number,
  category: string,
  description: string,
  image: string
}

@Component({
  selector: 'app-ppd-dc-dg-admin',
  templateUrl: './pd-dc-dg-admin.component.html',
  styleUrls: ['./pd-dc-dg-admin.component.css']
})
export class PdDcDgAdmComponent implements OnInit {

  protected dgAdminCategoryList: PdDgAdminCategory[];
  private dgAdminDailyRequestDataList: PdDgAdminDailyRequestData[];
  protected filteredDgAdminDailyRequestDataList: PdDgAdminDailyRequestData[];
  protected selectedCategory: number = 0;

  constructor(private productionService: ProductionService) { }

  ngOnInit(): void {
    this.productionService.onLoadDgAdminCategoryList().subscribe(
      (data) => {
        this.dgAdminCategoryList = data;
      }
    );
    this.productionService.onLoadDgAdminDailyRequestDataList().subscribe(
      (data) => {
        this.dgAdminDailyRequestDataList = data;
        this.filteredDgAdminDailyRequestDataList = this.dgAdminDailyRequestDataList;
      }
    );
  }

  protected onCategorySelectChange(element: Event) {
    this.selectedCategory = parseInt((<HTMLSelectElement>element.target).value, 10);
    this.filteredDgAdminDailyRequestDataList = this.filterDgAdminDailyRequestDataList(this.selectedCategory);
  }

  private filterDgAdminDailyRequestDataList(categoryId: number) {
    let aux = this.dgAdminDailyRequestDataList.slice();

    console.log(typeof this.selectedCategory === 'number')

    if (categoryId > 0) {
      aux = aux.filter((request) => request.categoryId === categoryId);
    }

    return aux;
  }
}
