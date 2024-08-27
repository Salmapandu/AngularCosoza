import { TestBed } from '@angular/core/testing';

import { JwtSessionsService } from './jwt-sessions.service';

describe('JwtSessionsService', () => {
  let service: JwtSessionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtSessionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
