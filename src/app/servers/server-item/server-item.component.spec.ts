import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ServerItemComponent } from './server-item.component';
import { By } from '@angular/platform-browser';
import { OfflineServer, OnlineServer } from '../testing/servers';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ServerItemComponent', () => {
  let component: ServerItemComponent;
  let fixture: ComponentFixture<ServerItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerItemComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show name if the server is offline', () => {
    component.server = OfflineServer;
    fixture.detectChanges();

    const name = fixture.debugElement.query(By.css('li>ul>li:first-child')).nativeElement as HTMLElement;
    expect(name.innerText).toMatch(OfflineServer.name);
  });

  it('should show hostname if available', () => {
    component.server = OnlineServer;
    fixture.detectChanges();

    const name = fixture.debugElement.query(By.css('li>ul>li:first-child')).nativeElement as HTMLElement;
    expect(name.innerText).toMatch(OnlineServer.hostname);
  });

  it('should show server status', () => {
    component.server = OnlineServer;
    fixture.detectChanges();

    const status = fixture.debugElement.query(By.css('li>ul>li+li>span')).nativeElement as HTMLElement;
    expect(status.innerText).toMatch('TEST_MAP 0/24');
  });

  it('should render badges', () => {
    component.server = OnlineServer;
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('ando-server-status-badge'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('ando-server-connect-badge'))).toBeTruthy();
  });
});
