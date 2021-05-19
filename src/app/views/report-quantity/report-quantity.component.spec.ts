import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReportQuantityComponent } from './report-quantity.component';

describe('ReportQuantityComponent', () => {
  let component: ReportQuantityComponent;
  let fixture: ComponentFixture<ReportQuantityComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportQuantityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
