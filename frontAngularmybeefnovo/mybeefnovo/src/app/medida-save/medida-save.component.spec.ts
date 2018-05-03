import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedidaSaveComponent } from './medida-save.component';

describe('MedidaSaveComponent', () => {
  let component: MedidaSaveComponent;
  let fixture: ComponentFixture<MedidaSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedidaSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedidaSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
