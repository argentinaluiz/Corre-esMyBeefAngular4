import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaanimalSaveComponent } from './categoriaanimal-save.component';

describe('CategoriaanimalSaveComponent', () => {
  let component: CategoriaanimalSaveComponent;
  let fixture: ComponentFixture<CategoriaanimalSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaanimalSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaanimalSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
