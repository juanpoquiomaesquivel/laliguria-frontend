import { Component } from '@angular/core';
import { ProductionService } from '../Services/production.service';

@Component({
  selector: 'app-production-module',
  templateUrl: './production-module.component.html',
  styleUrls: ['./production-module.component.css'],
  providers: [ProductionService]
})
export class ProductionModuleComponent {
  protected routes: any = [
    { link: 'daily-catalogue', name: 'Catálogo de producción' },
    { link: 'order-catalogue', name: 'Catálogo de pedidos' },
    { link: 'supply-request', name: 'Solicitar insumos' },
  ]
}
