import { TestBed } from '@angular/core/testing';

import { CustomTraslateService } from './custom.traslate.service';

describe('CustomTraslateService', () => {
  let service: CustomTraslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomTraslateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
