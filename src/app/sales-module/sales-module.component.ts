import { Component } from '@angular/core';

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
