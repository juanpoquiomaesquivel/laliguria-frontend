import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdSupplyReqCardComponent } from './prod-supply-req-card.component';

describe('ProdSupplyReqCardComponent', () => {
  let component: ProdSupplyReqCardComponent;
  let fixture: ComponentFixture<ProdSupplyReqCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdSupplyReqCardComponent]
    });
    fixture = TestBed.createComponent(ProdSupplyReqCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
