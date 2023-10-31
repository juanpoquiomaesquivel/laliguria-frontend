import { Component } from '@angular/core';
import { SalesInventoryItem } from '../../Models/SalesInventoryItem.model';
import { MatDialog } from '@angular/material/dialog';
import { SalesService } from '../../Services/sales.service';
import { Sort } from '@angular/material/sort';
import { SsProductItemData } from 'src/app/Models/Sales/Inventory/ss-product-item-data.model';
import { SupplyItemData } from 'src/app/Models/Warehouse/Inventory/supply-item-data.model';

@Component({
  selector: 'app-ss-inventory',
  templateUrl: './ss-inventory.component.html',
  styleUrls: ['./ss-inventory.component.css']
})
export class SsInventoryComponent {

  protected headers: any[] = [
    { name: '#', label: '#', description: '', width: 3, disabled: true },
    { name: 'code', label: 'código', description: '', width: 10, disabled: false },
    { name: 'name', label: 'nombre', description: '', width: 15, disabled: false },
    { name: 'description', label: 'descripción', description: '', width: 20, disabled: true },
    { name: 'category', label: 'categoría', description: '', width: 15, disabled: false },
    { name: 'registration', label: 'fecha de registro', description: '', width: 15, disabled: false },
    { name: 'producedQuantity', label: 'cantidad', description: '', width: 11, disabled: false },
    { name: 'available', label: 'disponible', description: '', width: 11, disabled: false },
  ]

  protected pageSize: number = 10;
  protected pageNumber: number = 1;

  private productItemDataList: SsProductItemData[];
  protected filteredProductItemDataList: SsProductItemData[];

  protected keyword: string = '';
  protected seeConsolidated: boolean = false;
  protected currentSort: Sort = null;

  inventoryItems: SalesInventoryItem[] = [];

  constructor(private matDialog: MatDialog, private salesService: SalesService) { }

  ngOnInit(): void {
    this.salesService.onLoadProductItemDataList().subscribe(
      (data) => {
        this.productItemDataList = data;
        this.filteredProductItemDataList = this.productItemDataList;
      }
    );
  }

  protected onCheckboxChange() {
    this.filteredProductItemDataList = this.filterProductItemDataList(this.keyword, this.currentSort);
  }

  protected onKeywordInputChange() {
    this.pageNumber = 1;
    this.filteredProductItemDataList = this.filterProductItemDataList(this.keyword, this.currentSort);
  }

  protected onSortChange(sort: Sort) {
    this.currentSort = sort;
    this.filteredProductItemDataList = this.filterProductItemDataList(this.keyword, this.currentSort);
  }

  private filterProductItemDataList(keyword: string, sort: Sort) {
    let aux = this.productItemDataList.slice();

    if (this.seeConsolidated) {
      aux = aux.reduce(
        (accumulator, current) => {
          const supply: SsProductItemData = current;
          const exists: SsProductItemData = accumulator.find(item => item.code === supply.code);

          if (exists) {
            exists.producedQuantity += supply.producedQuantity;
            exists.available += supply.available;
          } else {
            accumulator.push(new SupplyItemData(supply.code, supply.name, supply.description, null, supply.category, null, supply.producedQuantity, supply.available));
          }

          return accumulator;
        }, []
      );
    }

    if (aux.length > 0 && keyword != '') {
      aux = aux.filter((item) => item.code.toLowerCase().includes(keyword.toLowerCase()) || item.name.toLowerCase().includes(keyword.toLowerCase()) || item.category.toLowerCase().includes(keyword.toLowerCase()));
    }

    if (sort != null) {
      if (sort.direction != '') {
        aux.sort((a, b) => {
          const isAsc = sort.direction === 'asc';
          switch (sort.active) {
            case 'code':
              return compare(a.code, b.code, isAsc);
            case 'name':
              return compare(a.name, b.name, isAsc);
            case 'category':
              return compare(a.category, b.category, isAsc);
            case 'registration':
              return !this.seeConsolidated ? compare(a.registration, b.registration, isAsc) : 0;
            case 'producedQuantity':
              return compare(a.producedQuantity, b.producedQuantity, isAsc);
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