import { TestBed } from '@angular/core/testing';

import { RazasPerrosService } from './razas-perros.service';

describe('RazasPerrosService', () => {
  let service: RazasPerrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RazasPerrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
