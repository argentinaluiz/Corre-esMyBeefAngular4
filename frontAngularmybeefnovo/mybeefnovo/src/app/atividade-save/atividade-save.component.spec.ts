import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadeSaveComponent } from './atividade-save.component';

describe('AtividadeSaveComponent', () => {
  let component: AtividadeSaveComponent;
  let fixture: ComponentFixture<AtividadeSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtividadeSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtividadeSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
