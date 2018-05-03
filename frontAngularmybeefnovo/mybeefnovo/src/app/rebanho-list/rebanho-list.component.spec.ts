import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RebanhoListComponent } from './rebanho-list.component';

describe('RebanhoListComponent', () => {
  let component: RebanhoListComponent;
  let fixture: ComponentFixture<RebanhoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RebanhoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RebanhoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
