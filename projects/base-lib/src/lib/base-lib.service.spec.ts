import { TestBed } from '@angular/core/testing';

import { BaseLibService } from './base-lib.service';

describe('BaseLibService', () => {
  let service: BaseLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
