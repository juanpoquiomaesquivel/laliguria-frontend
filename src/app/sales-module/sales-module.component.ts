import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SalesService } from '../Services/sales.service';
import { SalesRequest } from '../Models/SalesRequest.model';

@Component({
  selector: 'app-sales-module',
  templateUrl: './sales-module.component.html',
  styleUrls: ['./sales-module.component.css']
})
export class SalesModuleComponent {

  protected routes: any = [
    {link: 'inventory', name: 'Inventario de productos'},
    {link: 'order-request', name: 'Solicitud de productos'},
    {link: 'expert-system', name: 'Sistema experto'},
  ]
}
