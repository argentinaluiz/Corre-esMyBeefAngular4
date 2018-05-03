import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropriedadeListComponent } from './propriedade-list.component';

describe('PropriedadeListComponent', () => {
  let component: PropriedadeListComponent;
  let fixture: ComponentFixture<PropriedadeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropriedadeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropriedadeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
