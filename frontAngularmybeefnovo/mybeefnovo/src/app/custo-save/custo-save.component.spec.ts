import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustoSaveComponent } from './custo-save.component';

describe('CustoSaveComponent', () => {
  let component: CustoSaveComponent;
  let fixture: ComponentFixture<CustoSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustoSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustoSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
