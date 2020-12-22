import { TestBed } from '@angular/core/testing';

import { FakesessionitemService } from './fakesessionitem.service';

describe('FakesessionitemService', () => {
  let service: FakesessionitemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakesessionitemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
