import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialLinksComponent } from './social-links.component';
import { SOCIAL_LINKS } from '../app-config.service';
import { By } from '@angular/platform-browser';

describe('SocialLinksComponent', () => {
  let component: SocialLinksComponent;
  let fixture: ComponentFixture<SocialLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialLinksComponent ],
      providers: [
        {
          provide: SOCIAL_LINKS,
          useValue: [
            {
              icon: 'github',
              target: 'FAKE_GITHUB_URL'
            },
            {
              icon: 'steam',
              target: 'FAKE_STEAM_URL'
            }
          ]
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should resolve github icon', () => {
    const ghAnchor = fixture.debugElement.query(By.css('a[title=github]')).nativeElement as HTMLAnchorElement;
    expect(ghAnchor).toBeTruthy();
    expect(ghAnchor.href).toMatch('FAKE_GITHUB_URL');

    const ghImg = fixture.debugElement.query(By.css('a[title=github]>img')).nativeElement as HTMLImageElement;
    expect(ghImg).toBeTruthy();
    expect(ghImg.src).toMatch('assets/github-circle.svg');
  });

  it('should resolve steam icon', () => {
    const steamAnchor = fixture.debugElement.query(By.css('a[title=steam]')).nativeElement as HTMLAnchorElement;
    expect(steamAnchor).toBeTruthy();
    expect(steamAnchor.href).toMatch('FAKE_STEAM_URL');

    const steamImg = fixture.debugElement.query(By.css('a[title=steam]>img')).nativeElement as HTMLImageElement;
    expect(steamImg).toBeTruthy();
    expect(steamImg.src).toMatch('assets/steam.svg');
  });
});
