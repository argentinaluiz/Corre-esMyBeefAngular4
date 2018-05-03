import { TestBed, inject } from '@angular/core/testing';

import { RebanhoService } from './rebanho.service';

describe('RebanhoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RebanhoService]
    });
  });

  it('should be created', inject([RebanhoService], (service: RebanhoService) => {
    expect(service).toBeTruthy();
  }));
});
