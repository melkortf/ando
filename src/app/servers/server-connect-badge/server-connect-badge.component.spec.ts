import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerConnectBadgeComponent } from './server-connect-badge.component';

describe('ServerConnectBadgeComponent', () => {
  let component: ServerConnectBadgeComponent;
  let fixture: ComponentFixture<ServerConnectBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerConnectBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerConnectBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
