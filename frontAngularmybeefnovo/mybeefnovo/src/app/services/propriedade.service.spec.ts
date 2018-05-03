import { TestBed, inject } from '@angular/core/testing';

import { PropriedadeService } from './propriedade.service';

describe('PropriedadeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PropriedadeService]
    });
  });

  it('should be created', inject([PropriedadeService], (service: PropriedadeService) => {
    expect(service).toBeTruthy();
  }));
});
