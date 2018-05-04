import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ServerItemComponent } from './server-item.component';
import { Server } from '../../morgoth/models/server';
import { By } from '@angular/platform-browser';
import { SharedModule } from '../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const OfflineServer: Server = {
  name: 'TEST_NAME_SERVER_OFFLINE',
  state: 'Offline',
  status: {
    hostname: null,
    playerCount: 0,
    maxPlayers: 0,
    map: null,
  }
};

const OnlineServer: Server = {
  name: 'TEST_NAME_SERVER_ONLINE',
  state: 'Running',
  status: {
    hostname: 'TEST_HOSTNAME_SERVER_ONLINE',
    playerCount: 0,
    maxPlayers: 24,
    map: 'TEST_MAP',
  }
};

describe('ServerItemComponent', () => {
  let component: ServerItemComponent;
  let fixture: ComponentFixture<ServerItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        NgbModule.forRoot()
      ],
      declarations: [ ServerItemComponent ]
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

  it('shows name if the server is offline', () => {
    component.server = OfflineServer;
    fixture.detectChanges();

    const name = fixture.debugElement.query(By.css('li>ul>li:first-child')).nativeElement as HTMLElement;
    expect(name.innerText).toMatch(OfflineServer.name);
  });

  it('shows hostname if available', () => {
    component.server = OnlineServer;
    fixture.detectChanges();

    const name = fixture.debugElement.query(By.css('li>ul>li:first-child')).nativeElement as HTMLElement;
    expect(name.innerText).toMatch(OnlineServer.status.hostname);
  });

  it('shows server status', () => {
    component.server = OnlineServer;
    fixture.detectChanges();

    const status = fixture.debugElement.query(By.css('li>ul>li+li>span')).nativeElement as HTMLElement;
    expect(status.innerText).toMatch('TEST_MAP 0/24');
  });

  it('shows a proper state badge', () => {
    component.server = OfflineServer;
    fixture.detectChanges();

    let badge = fixture.debugElement.query(By.css('li>span.badge')).nativeElement as HTMLElement;
    expect(badge.innerText).toMatch('offline');

    component.server = OnlineServer;
    fixture.detectChanges();

    badge = fixture.debugElement.query(By.css('li>span.badge')).nativeElement as HTMLElement;
    expect(badge.innerText).toMatch('running');
  });
});
