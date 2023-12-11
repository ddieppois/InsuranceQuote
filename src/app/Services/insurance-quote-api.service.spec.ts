import { TestBed } from '@angular/core/testing';

import { InsuranceQuoteAPIService } from './insurance-quote-api.service';

describe('InsuranceQuoteAPIService', () => {
  let service: InsuranceQuoteAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsuranceQuoteAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
