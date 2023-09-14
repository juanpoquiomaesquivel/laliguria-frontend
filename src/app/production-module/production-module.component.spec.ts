import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionModuleComponent } from './production-module.component';

describe('ProductionModuleComponent', () => {
  let component: ProductionModuleComponent;
  let fixture: ComponentFixture<ProductionModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductionModuleComponent]
    });
    fixture = TestBed.createComponent(ProductionModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
