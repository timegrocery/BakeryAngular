import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StockOrderComponent } from './stock-order.component';

describe('StockOrderComponent', () => {
  let component: StockOrderComponent;
  let fixture: ComponentFixture<StockOrderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StockOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
