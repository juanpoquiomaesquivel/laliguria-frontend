import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdDailyCatalogueComponent } from './prod-daily-catalogue.component';

describe('ProdDailyCatalogueComponent', () => {
  let component: ProdDailyCatalogueComponent;
  let fixture: ComponentFixture<ProdDailyCatalogueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdDailyCatalogueComponent]
    });
    fixture = TestBed.createComponent(ProdDailyCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
