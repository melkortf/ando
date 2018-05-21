import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DaemonService } from './daemon.service';
import { AnneEndpointsService } from '../anne-endpoints.service';
import { HttpClient } from '@angular/common/http';

class MockServersService {
  readonly daemon = 'FAKE_DAEMON';
}

describe('DaemonService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaemonService,
        {
          provide: AnneEndpointsService,
          useClass: MockServersService
        }
      ],
      imports: [HttpClientTestingModule]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([DaemonService], (service: DaemonService) => {
    expect(service).toBeTruthy();
  }));

  it('should query anne endpoint', inject([DaemonService], (service: DaemonService) => {
    service.getDaemon().subscribe();
    const req = httpTestingController.expectOne('FAKE_DAEMON');
    expect(req.request.responseType).toEqual('json');
    httpTestingController.verify();
  }));
});
