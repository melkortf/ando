import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MorgothErrorAlertComponent } from './morgoth-error-alert/morgoth-error-alert.component';
import { RouterModule } from '@angular/router';
import { DaemonStatusComponent } from './daemon-status/daemon-status.component';
import { SharedModule } from './shared/shared.module';
import { MorgothTestingService } from './morgoth/testing';
import { MorgothService } from './morgoth/morgoth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SharedModule,
      ],
      declarations: [
        AppComponent,
        DaemonStatusComponent,
        MorgothErrorAlertComponent,
      ],
      providers: [
        {
          provide: MorgothService,
          useClass: MorgothTestingService
        }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in a header tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('header>nav>span.navbar-brand').textContent).toContain('melkor.tf');
  }));

  it('should render social links in navbar', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const github = fixture.debugElement.query(By.css('header>nav>span.navbar-text>a:nth-child(1)')).nativeElement as HTMLAnchorElement;
    expect(github.href).toBe('https://github.com/melkortf');

    const steam = fixture.debugElement.query(By.css('header>nav>span.navbar-text>a:nth-child(2)')).nativeElement as HTMLAnchorElement;
    expect(steam.href).toBe('https://steamcommunity.com/id/nieduzy/');
  }));
});
