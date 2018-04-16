import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { DaemonStatusComponent } from './daemon-status.component';
import { MorgothTestingService } from '../morgoth/testing';
import { MorgothService } from '../morgoth/morgoth.service';
import { By } from '@angular/platform-browser';

describe('DaemonStatusComponent', () => {
  let component: DaemonStatusComponent;
  let fixture: ComponentFixture<DaemonStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaemonStatusComponent,
      ],
      providers: [
        {
          provide: MorgothService,
          useClass: MorgothTestingService
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaemonStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', inject([MorgothService], (service: MorgothTestingService) => {
    expect(component).toBeTruthy();
  }));

  it('shows proper status and icon', inject([MorgothService], (service: MorgothTestingService) => {
    service.nextInfo({ version: '1.0-TESTING' });
    fixture.detectChanges();

    const status = fixture.debugElement.query(By.css('span')).nativeElement as HTMLElement;
    expect(status.innerText).toMatch('morgoth daemon version 1.0-TESTING');

    const icon = fixture.debugElement.query(By.css('span>i')).nativeElement as HTMLElement;
    expect(icon.innerText).toMatch('info');
  }));

  it('shows disconnected', inject([MorgothService], (service: MorgothTestingService) => {
    service.nextError('ERROR');
    fixture.detectChanges();

    const status = fixture.debugElement.query(By.css('span')).nativeElement as HTMLElement;
    expect(status.innerText).toMatch('morgoth daemon unavailable');

    const icon = fixture.debugElement.query(By.css('span>i')).nativeElement as HTMLElement;
    expect(icon.innerText).toMatch('error');
  }));
});
