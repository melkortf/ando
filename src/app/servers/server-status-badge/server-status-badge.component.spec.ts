import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OnlineServer, OfflineServer } from '../testing/servers';
import { ServerStatusBadgeComponent } from './server-status-badge.component';
import { By } from '@angular/platform-browser';

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

  it('should show correct state text and apply appropriate class', () => {
    const server = Object.assign({}, OfflineServer);
    component.server = server;
    fixture.detectChanges();

    const stateElement = fixture.debugElement.query(By.css('span')).nativeElement as HTMLElement;
    expect(stateElement.innerText).toBe('offline');
    expect(stateElement.classList.contains('badge-secondary')).toBe(true);

    server.state = 'Starting';
    fixture.detectChanges();

    expect(stateElement.innerText).toBe('starting');
    expect(stateElement.classList.contains('badge-light')).toBe(true);

    server.state = 'Running';
    fixture.detectChanges();

    expect(stateElement.innerText).toBe('running');
    expect(stateElement.classList.contains('badge-success')).toBe(true);

    server.state = 'ShuttingDown';
    fixture.detectChanges();

    expect(stateElement.innerText).toBe('shutting down');
    expect(stateElement.classList.contains('badge-dark')).toBe(true);

    server.state = 'Crashed';
    fixture.detectChanges();

    expect(stateElement.innerText).toBe('crashed');
    expect(stateElement.classList.contains('badge-danger')).toBe(true);
  });
});
