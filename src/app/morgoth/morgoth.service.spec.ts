import { TestBed, inject } from '@angular/core/testing';
import { MorgothService, MORGOTH_DOMAIN } from './morgoth.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('MorgothService', () => {
let httpClient: HttpClient;
let httpTestingController: HttpTestingController;

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

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service = TestBed.get(MorgothService);
    expect(service).toBeTruthy();
  });

  it('should query morgoth endpoint', () => {
    const service = TestBed.get(MorgothService);
    service.getServers().subscribe();

    let req = httpTestingController.expectOne('FAKE_HOST/daemon');
    expect(req.request.responseType).toEqual('json');

    req = httpTestingController.expectOne('FAKE_HOST/servers');
    expect(req.request.responseType).toEqual('json');

    httpTestingController.verify();
  });
});
