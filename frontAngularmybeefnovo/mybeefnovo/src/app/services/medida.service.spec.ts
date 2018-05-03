import { TestBed, inject } from '@angular/core/testing';

import { MedidaService } from './medida.service';

describe('MedidaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MedidaService]
    });
  });

  it('should be created', inject([MedidaService], (service: MedidaService) => {
    expect(service).toBeTruthy();
  }));
});
