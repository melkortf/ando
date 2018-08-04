import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ServerListComponent } from './server-list.component';
import { ServersService } from '../servers.service';
import { By } from '@angular/platform-browser';
import { ReplaySubject } from 'rxjs';
import { Server } from '../models';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { OfflineServer, OnlineServer } from '../testing/servers';

class ServersServiceStub {
  servers = new ReplaySubject<Server[]>(1);
  getServers() { return this.servers.asObservable(); }
}

describe('ServerListComponent', () => {
  let component: ServerListComponent;
  let fixture: ComponentFixture<ServerListComponent>;
  let service: ServersServiceStub;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerListComponent ],
      providers: [
        { provide: ServersService, useClass: ServersServiceStub }
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
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

  it('should render all the servers', () => {
    service.servers.next([ OfflineServer, OnlineServer ]);
    fixture.detectChanges();

    expect(fixture.debugElement.queryAll(By.css('ando-server-item')).length).toBe(2);
  });

  it('should show message if there are no servers', () => {
    service.servers.next([]);
    fixture.detectChanges();

    const msg = fixture.debugElement.query(By.css('small')).nativeElement as HTMLElement;
    expect(msg.innerText).toContain('No servers');
  });
});
