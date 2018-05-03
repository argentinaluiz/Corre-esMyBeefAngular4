import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RebanhoSaveComponent } from './rebanho-save.component';

describe('RebanhoSaveComponent', () => {
  let component: RebanhoSaveComponent;
  let fixture: ComponentFixture<RebanhoSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RebanhoSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RebanhoSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
