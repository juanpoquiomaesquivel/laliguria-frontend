import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdOrderCatCardComponent } from './prod-order-cat-card.component';

describe('ProdOrderCatCardComponent', () => {
  let component: ProdOrderCatCardComponent;
  let fixture: ComponentFixture<ProdOrderCatCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdOrderCatCardComponent]
    });
    fixture = TestBed.createComponent(ProdOrderCatCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
