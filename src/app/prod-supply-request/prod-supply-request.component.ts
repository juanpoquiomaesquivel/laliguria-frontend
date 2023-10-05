import { Component } from '@angular/core';
import { ProductionRequest } from '../Models/ProductioRequest.model';
import { ProductionService } from '../Services/production.service';
import { MatDialog } from '@angular/material/dialog';
import { ProdSupplyReqCardDgFreqComponent } from '../prod-supply-req-card-dg-freq/prod-supply-req-card-dg-freq.component';

@Component({
  selector: 'app-prod-supply-request',
  templateUrl: './prod-supply-request.component.html',
  styleUrls: ['./prod-supply-request.component.css'],
  providers: [ProductionService]
})
export class ProdSupplyRequestComponent {
  title: string = 'SOLICITAR INSUMOS';
  subtitle1: string = 'CINTA DE OPCIONES';
  subtitle2: string = 'HISTORIAL DE SOLICITUDES';

  requests: ProductionRequest[] = [];

  constructor(private matDialog: MatDialog, private productionService: ProductionService) { }

  ngOnInit(): void {
    this.requests = this.productionService.prodRequests;
  }

  openNewRequestFormDialog() {
    this.matDialog.open(ProdSupplyReqCardDgFreqComponent, {
      width: '350px',
      height: '450px',
      data: [
        { name: 'Detergente', quantity: 50 },
        { name: 'Detergente', quantity: 50 },
        { name: 'Detergente', quantity: 50 },
        { name: 'Detergente', quantity: 50 },
        { name: 'Detergente', quantity: 50 },
        { name: 'Detergente', quantity: 50 },
        { name: 'Detergente', quantity: 50 },
        { name: 'Detergente', quantity: 50 },
        { name: 'Detergente', quantity: 50 },
        { name: 'Detergente', quantity: 50 },
        { name: 'Detergente', quantity: 50 },
        { name: 'Detergente', quantity: 50 },
        { name: 'Detergente', quantity: 50 },
        { name: 'Detergente', quantity: 50 },
        { name: 'Detergente', quantity: 50 },
        { name: 'Detergente', quantity: 50 },
        { name: 'Detergente', quantity: 50 },
        { name: 'Detergente', quantity: 50 },
        { name: 'Detergente', quantity: 50 },
      ]
    })
  }
}
