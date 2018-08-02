import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaemonStatusComponent } from './daemon-status.component';
import { DaemonService } from '../daemon.service';
import { Daemon } from '../models';
import { By } from '@angular/platform-browser';
import { ReplaySubject } from 'rxjs';

class DaemonServiceStub {
  daemon = new ReplaySubject<Daemon>(1);
  getDaemon() { return this.daemon.asObservable(); }
}

describe('DaemonStatusComponent', () => {
  let component: DaemonStatusComponent;
  let fixture: ComponentFixture<DaemonStatusComponent>;
  let daemonService: DaemonServiceStub;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaemonStatusComponent ],
      providers: [
        { provide: DaemonService, useClass: DaemonServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaemonStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    daemonService = TestBed.get(DaemonService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render proper version', () => {
    const mockDaemon: Daemon = { version: 'FAKE-VERSION' };
    daemonService.daemon.next(mockDaemon);
    fixture.detectChanges();

    const status = fixture.debugElement.query(By.css('span')).nativeElement as HTMLElement;
    expect(status.innerText).toMatch('morgoth daemon version FAKE-VERSION');
  });
});
