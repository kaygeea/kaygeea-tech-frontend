import { TestBed } from '@angular/core/testing';

import { LsCacheService } from './ls-cache.service';

describe('LsCacheService', () => {
  let service: LsCacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LsCacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
