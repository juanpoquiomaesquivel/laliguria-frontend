import { Component } from '@angular/core';
import { WarehouseService } from '../Services/warehouse.service';

@Component({
  selector: 'app-warehouse-module',
  templateUrl: './warehouse-module.component.html',
  styleUrls: ['./warehouse-module.component.css']
})
export class WarehouseModuleComponent {

  protected routes: any = [
    { link: 'inventory', name: 'Inventario de almacen' },
    { link: 'supply-request', name: 'Solicitud de insumos' },
    { link: 'expert-system', name: 'Sistema experto' },
  ]
}
