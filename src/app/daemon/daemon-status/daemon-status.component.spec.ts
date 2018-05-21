import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaemonStatusComponent } from './daemon-status.component';
import { DaemonService } from '../daemon.service';
import { DaemonTestingService } from '../testing/daemon-testing.service';
import { Daemon } from '../models';
import { By } from '@angular/platform-browser';

describe('DaemonStatusComponent', () => {
  let component: DaemonStatusComponent;
  let fixture: ComponentFixture<DaemonStatusComponent>;
  let service: DaemonTestingService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaemonStatusComponent ],
      providers: [
        {
          provide: DaemonService,
          useClass: DaemonTestingService
        }
      ]
    })
    .compileComponents();

    service = TestBed.get(DaemonService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaemonStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render proper version', () => {
    const daemon: Daemon = {
      version: 'FAKE-VERSION'
    };

    service.nextDaemon(daemon);
    fixture.detectChanges();

    const status = fixture.debugElement.query(By.css('span')).nativeElement as HTMLElement;
    expect(status.innerText).toMatch('morgoth daemon version FAKE-VERSION');
  });
});
