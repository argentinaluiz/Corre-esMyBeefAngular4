import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropriedadeSaveComponent } from './propriedade-save.component';

describe('PropriedadeSaveComponent', () => {
  let component: PropriedadeSaveComponent;
  let fixture: ComponentFixture<PropriedadeSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropriedadeSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropriedadeSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
