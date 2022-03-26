import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingcompComponent } from './pricingcomp.component';

describe('PricingcompComponent', () => {
  let component: PricingcompComponent;
  let fixture: ComponentFixture<PricingcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
