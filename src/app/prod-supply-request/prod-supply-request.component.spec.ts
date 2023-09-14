import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdSupplyRequestComponent } from './prod-supply-request.component';

describe('ProdSupplyRequestComponent', () => {
  let component: ProdSupplyRequestComponent;
  let fixture: ComponentFixture<ProdSupplyRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdSupplyRequestComponent]
    });
    fixture = TestBed.createComponent(ProdSupplyRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
