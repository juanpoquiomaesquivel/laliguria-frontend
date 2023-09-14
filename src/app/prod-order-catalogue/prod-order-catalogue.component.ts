import { Component } from '@angular/core';

@Component({
  selector: 'app-prod-order-catalogue',
  templateUrl: './prod-order-catalogue.component.html',
  styleUrls: ['./prod-order-catalogue.component.css']
})
export class ProdOrderCatalogueComponent {
  title: string = 'CATÁLOGO DE PEDIDOS';
  subtitle1: string = 'CINTA DE OPCIONES';
  subtitle2: string = 'PEDIDOS A PRODUCCIÓN';
}
