import { TestBed, inject } from '@angular/core/testing';

import { AppConfigService, SOCIAL_LINKS } from './app-config.service';

describe('AppConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AppConfigService,
        {
          provide: SOCIAL_LINKS,
          useValue: [
            {
              icon: 'FAKE_ICON',
              iconSource: 'FAKE_ICON_SOURCE',
              target: 'FAKE_URL'
            },
          ]
        }
      ]
    });
  });

  it('should be created', inject([AppConfigService], (service: AppConfigService) => {
    expect(service).toBeTruthy();
  }));

  it('should provide correct social links', inject([AppConfigService], (service: AppConfigService) => {
    expect(service.socialLinks.length).toBe(1);
  }));
});
