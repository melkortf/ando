import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorgothErrorAlertComponent } from './morgoth-error-alert.component';

describe('MorgothErrorAlertComponent', () => {
  let component: MorgothErrorAlertComponent;
  let fixture: ComponentFixture<MorgothErrorAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorgothErrorAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorgothErrorAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
