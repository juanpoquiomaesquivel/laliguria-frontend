import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdDailyCatCardComponent } from './prod-daily-cat-card.component';

describe('ProdDailyCatCardComponent', () => {
  let component: ProdDailyCatCardComponent;
  let fixture: ComponentFixture<ProdDailyCatCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdDailyCatCardComponent]
    });
    fixture = TestBed.createComponent(ProdDailyCatCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
