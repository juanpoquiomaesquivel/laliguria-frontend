import { Component } from '@angular/core';

@Component({
  selector: 'app-production-module',
  templateUrl: './production-module.component.html',
  styleUrls: ['./production-module.component.css']
})
export class ProductionModuleComponent {
  routes: any = [
    {link: 'daily-catalogue', name: 'Catálogo de producción'},
    {link: 'order-catalogue', name: 'Catálogo de pedidos'},
    {link: 'supply-request', name: 'Solicitar insumos'},
  ]
}
