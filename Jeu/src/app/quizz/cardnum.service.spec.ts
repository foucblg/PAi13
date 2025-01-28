import { TestBed } from '@angular/core/testing';

import { CardnumService } from './cardnum.service';

describe('CardnumService', () => {
  let service: CardnumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardnumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
