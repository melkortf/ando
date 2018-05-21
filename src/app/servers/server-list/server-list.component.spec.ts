import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { ServerListComponent } from './server-list.component';
import { ServerItemComponent } from '../server-item/server-item.component';
import { SharedModule } from '../../shared/shared.module';
import { ServerStatusBadgeComponent } from '../server-status-badge/server-status-badge.component';
import { ServerConnectBadgeComponent } from '../server-connect-badge/server-connect-badge.component';
import { ServersService } from '../servers.service';
import { ServersTestingService } from '../testing/servers-testing.service';
import { By } from '@angular/platform-browser';

describe('ServerListComponent', () => {
  let component: ServerListComponent;
  let fixture: ComponentFixture<ServerListComponent>;
  let service: ServersTestingService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
      ],
      declarations: [
        ServerItemComponent,
        ServerListComponent,
        ServerStatusBadgeComponent,
        ServerConnectBadgeComponent,
      ],
      providers: [
        {
          provide: ServersService,
          useClass: ServersTestingService
        }
      ]
    })
    .compileComponents();

    service = TestBed.get(ServersService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not render unless the service resolves', () => {
    expect(fixture.debugElement.query(By.css('ul'))).toBe(null);
  });

  it('should show message if there are no servers', () => {
    service.nextServers([]);
    fixture.detectChanges();

    const msg = fixture.debugElement.query(By.css('small')).nativeElement as HTMLElement;
    expect(msg.innerText).toContain('No servers');
  });
});
