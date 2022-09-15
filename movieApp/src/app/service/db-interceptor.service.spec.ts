import { TestBed } from '@angular/core/testing';

import { DbInterceptorService } from './db-interceptor.service';

describe('DbInterceptorService', () => {
  let service: DbInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
