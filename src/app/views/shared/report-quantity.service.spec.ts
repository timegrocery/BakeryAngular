import { TestBed } from '@angular/core/testing';

import { ReportQuantityService } from './report-quantity.service';

describe('ReportQuantityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReportQuantityService = TestBed.get(ReportQuantityService);
    expect(service).toBeTruthy();
  });
});
