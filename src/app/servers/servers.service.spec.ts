import { HttpClient } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ServersService } from './servers.service';
import { AnneEndpointsService } from '../anne-endpoints.service';

class MockServersService {
  readonly servers = 'FAKE_SERVERS';
}

describe('ServersService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ServersService,
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

  it('should be created', inject([ServersService], (service: ServersService) => {
    expect(service).toBeTruthy();
  }));

  it('should query anne endpoint', inject([ServersService], (service: ServersService) => {
    service.getServers().subscribe();
    const req = httpTestingController.expectOne('FAKE_SERVERS');
    expect(req.request.responseType).toEqual('json');
    httpTestingController.verify();
  }));
});
