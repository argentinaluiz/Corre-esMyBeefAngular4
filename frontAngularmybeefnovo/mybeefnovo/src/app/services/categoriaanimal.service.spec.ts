import { TestBed, inject } from '@angular/core/testing';

import { CategoriaanimalService } from './categoriaanimal.service';

describe('CategoriaanimalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoriaanimalService]
    });
  });

  it('should be created', inject([CategoriaanimalService], (service: CategoriaanimalService) => {
    expect(service).toBeTruthy();
  }));
});
