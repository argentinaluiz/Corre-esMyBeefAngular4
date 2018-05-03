import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaanimalListComponent } from './categoriaanimal-list.component';

describe('CategoriaanimalListComponent', () => {
  let component: CategoriaanimalListComponent;
  let fixture: ComponentFixture<CategoriaanimalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaanimalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaanimalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
