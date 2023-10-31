import { Component, Input } from '@angular/core';
import { PdOrderRequest } from 'src/app/Models/Production/Order Catalogue/pd-order-request.model';
import { ProductionService } from 'src/app/Services/production.service';

@Component({
  selector: 'app-pd-order-item-request-card',
  templateUrl: './pd-order-item-request-card.component.html',
  styleUrls: ['./pd-order-item-request-card.component.css']
})
export class PdOrderItemRequestCardComponent {

  @Input() request: PdOrderRequest;
  
  protected getRequestStatusId() {
    return typeof this.request.status !== 'number' ? this.request.status.id : null;
  }

  protected getRequestStatusName() {
    return typeof this.request.status !== 'number' ? this.request.status.name : null;
  }

  protected getRequestStatusDescription() {
    return typeof this.request.status !== 'number' ? this.request.status.description : null;
  }

  protected getRequestStatusColorHex() {
    return typeof this.request.status !== 'number' ? this.request.status.colorHex : null;
  }

  constructor(private productionService: ProductionService) { }



  protected currentExpandedIndex: number = -1;

  protected toggleCollapse(index: number) {
    if (this.currentExpandedIndex === index) {
        // Clicking on an already expanded card, so collapse it
        this.currentExpandedIndex = -1;
    } else {
        // Clicking on a new card, so expand it
        this.currentExpandedIndex = index;
    }
}
}
