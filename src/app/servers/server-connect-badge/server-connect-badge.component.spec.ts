import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OnlineServer, OfflineServer } from '../testing/servers';
import { ServerConnectBadgeComponent } from './server-connect-badge.component';
import { By } from '@angular/platform-browser';

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

  it('should apply correct CSS classes', () => {
    component.server = OnlineServer;
    fixture.detectChanges();

    const a = fixture.debugElement.query(By.css('a')).nativeElement as HTMLAnchorElement;
    expect(a.classList.contains('badge')).toBe(true);
    expect(a.classList.contains('badge-info')).toBe(true);
  });

  it('should provide a correct connect link', () => {
    component.server = OnlineServer;
    fixture.detectChanges();

    const a = fixture.debugElement.query(By.css('a')).nativeElement as HTMLAnchorElement;
    expect(a.href).toBe('testprot://connect/testhostname:1234');
  });

  it('should be hidden if a valid connect cannot be obtained', () => {
    expect(fixture.debugElement.query(By.css('a'))).toBeFalsy();

    component.server = OfflineServer;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('a'))).toBeFalsy();

    const server = Object.assign({}, OnlineServer);
    server.address = '';
    component.server = server;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('a'))).toBeFalsy();
  });
});
