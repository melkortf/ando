import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { DaemonStatusComponent } from './daemon/daemon-status/daemon-status.component';
import { DaemonService } from './daemon/daemon.service';
import { DaemonTestingService } from './daemon/testing/daemon-testing.service';
import { NgProgressModule } from '@ngx-progressbar/core';
import { SocialLinksComponent } from './core/social-links/social-links.component';
import { CoreModule } from './core/core.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule,
        SharedModule,
        NgProgressModule.forRoot(),
        RouterTestingModule,
      ],
      declarations: [
        AppComponent,
        DaemonStatusComponent,
      ],
      providers: [
        {
          provide: DaemonService,
          useClass: DaemonTestingService
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
});
