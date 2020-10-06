import { TestBed } from '@angular/core/testing';

import { UseringresoService } from './useringreso.service';

describe('UseringresoService', () => {
  let service: UseringresoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UseringresoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
