import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPricingComponent } from './list-pricing.component';

describe('ListPricingComponent', () => {
  let component: ListPricingComponent;
  let fixture: ComponentFixture<ListPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPricingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
