import { TestBed } from '@angular/core/testing';

import { BodykitsService } from './bodykits.service';

describe('BodykitsService', () => {
  let service: BodykitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BodykitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
