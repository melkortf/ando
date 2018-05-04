import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerStatusBadgeComponent } from './server-status-badge.component';

describe('ServerStatusBadgeComponent', () => {
  let component: ServerStatusBadgeComponent;
  let fixture: ComponentFixture<ServerStatusBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerStatusBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerStatusBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
