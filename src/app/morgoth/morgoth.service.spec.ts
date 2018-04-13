import { TestBed, inject } from '@angular/core/testing';
import { MorgothService, MORGOTH_DOMAIN } from './morgoth.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('MorgothService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MorgothService,
        {
          provide: MORGOTH_DOMAIN,
          useValue: 'FAKE_HOST',
        }
      ],
      imports: [
        HttpClientTestingModule
      ]
    });
  });

  it('should be created', inject([MorgothService, HttpTestingController], (service: MorgothService) => {
    expect(service).toBeTruthy();
  }));

  it('should query morgoth api',
    inject([MorgothService, HttpTestingController], (service: MorgothService, ctrl: HttpTestingController) => {

      service.getServers().subscribe();
      ctrl.expectOne('FAKE_HOST/servers');
      ctrl.verify();

  }));
});
