import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { Component, LOCALE_ID } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { SupplyItemData } from 'src/app/Models/Warehouse/Inventory/supply-item-data.model';
import { WarehouseService } from 'src/app/Services/warehouse.service';
registerLocaleData(localeEs, 'es')

@Component({
  selector: 'app-wh-inventory',
  templateUrl: './wh-inventory.component.html',
  styleUrls: ['./wh-inventory.component.css'],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }]
})
export class WhInventoryComponent {

  protected headers: any[] = [
    { name: '#', label: '#', description: '', width: 3, disabled: true },
    { name: 'code', label: 'código', description: '', width: 10, disabled: false },
    { name: 'name', label: 'nombre', description: '', width: 20, disabled: false },
    { name: 'provider', label: 'proveedor', description: '', width: 15, disabled: false },
    { name: 'category', label: 'categoría', description: '', width: 15, disabled: false },
    { name: 'registration', label: 'fecha de registro', description: '', width: 15, disabled: false },
    { name: 'quantity', label: 'cantidad', description: '', width: 11, disabled: false },
    { name: 'available', label: 'disponible', description: '', width: 11, disabled: true },
  ]

  protected pageSize: number = 10;
  protected pageNumber: number = 1;

  private supplyItemDataList: SupplyItemData[] = [];
  protected filteredSupplyItemDataList: SupplyItemData[] = [];

  protected keyword: string = '';
  protected seeConsolidated: boolean = false;
  protected currentSort: Sort = null;

  protected isLoading: boolean = true;
  protected isEmpty: boolean = true;

  constructor(private warehouseService: WarehouseService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.warehouseService.onLoadSupplyItemDataList().subscribe(
      (data) => {
        this.supplyItemDataList = data;
        this.filteredSupplyItemDataList = this.supplyItemDataList;
        this.isLoading = false;
        this.isEmpty = (this.filteredSupplyItemDataList.length === 0);
      }
    );
  }

  protected onCheckboxChange() {
    this.isLoading = true;
    this.filteredSupplyItemDataList = this.filterSupplyItemDataList(this.keyword, this.currentSort);
    this.isLoading = false;
    this.isEmpty = (this.filteredSupplyItemDataList.length === 0);
  }

  protected onKeywordInputChange() {
    this.isLoading = true;
    this.pageNumber = 1;
    this.filteredSupplyItemDataList = this.filterSupplyItemDataList(this.keyword, this.currentSort);
    this.isLoading = false;
    this.isEmpty = (this.filteredSupplyItemDataList.length === 0);
  }

  protected onSortChange(sort: Sort) {
    this.isLoading = true;
    this.currentSort = sort;
    this.filteredSupplyItemDataList = this.filterSupplyItemDataList(this.keyword, this.currentSort);
    this.isLoading = false;
    this.isEmpty = (this.filteredSupplyItemDataList.length === 0);
  }

  private filterSupplyItemDataList(keyword: string, sort: Sort) {
    let aux = this.supplyItemDataList.slice();

    if (this.seeConsolidated) {
      aux = aux.reduce(
        (accumulator, current) => {
          const supply: SupplyItemData = current;
          const exists: SupplyItemData = accumulator.find(item => item.code === supply.code);

          if (exists) {
            exists.quantity += supply.quantity;
            exists.available += supply.available;
          } else {
            accumulator.push(new SupplyItemData(supply.code, supply.name, supply.description, null, supply.category, null, supply.quantity, supply.available));
          }

          return accumulator;
        }, []
      );
    }

    if (aux.length > 0 && keyword != '') {
      aux = aux.filter(
        (item) => item.code.toLowerCase().includes(keyword.toLowerCase()) ||
          item.name.toLowerCase().includes(keyword.toLowerCase()) ||
          item.category.toLowerCase().includes(keyword.toLowerCase())
      );
    }

    if (sort != null) {
      if (sort.direction != '') {
        aux.sort(
          (a, b) => {
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
              case 'code':
                return compare(a.code, b.code, isAsc);
              case 'name':
                return compare(a.name, b.name, isAsc);
              case 'provider':
                return compare(a.provider, b.provider, isAsc);
              case 'category':
                return compare(a.category, b.category, isAsc);
              case 'registration':
                return !this.seeConsolidated ? compare(a.registration, b.registration, isAsc) : 0;
              case 'quantity':
                return compare(a.quantity, b.quantity, isAsc);
              case 'available':
                return compare(a.available, b.available, isAsc);
              default:
                return 0;
            }
          });
      }
    }

    return aux;
  }
}

function compare(a: number | string | Date, b: number | string | Date, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}