import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdOrderCatalogueComponent } from './prod-order-catalogue.component';

describe('ProdOrderCatalogueComponent', () => {
  let component: ProdOrderCatalogueComponent;
  let fixture: ComponentFixture<ProdOrderCatalogueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdOrderCatalogueComponent]
    });
    fixture = TestBed.createComponent(ProdOrderCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
