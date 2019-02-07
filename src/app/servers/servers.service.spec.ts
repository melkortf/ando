import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ServersService } from './servers.service';
import { ANNE_DOMAIN } from '../anne-domain';
import { OnlineServer, OfflineServer } from './testing/servers';

describe('ServersService', () => {
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ANNE_DOMAIN, useValue: 'FAKE_HOST' },
        ServersService,
      ],
      imports: [HttpClientTestingModule]
    });

    httpController = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([ServersService], (service: ServersService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getServers()', () => {
    it('should query anne endpoint', inject([ServersService], (service: ServersService) => {
      service.getServers().subscribe();
      const tr = httpController.expectOne('FAKE_HOST/servers');
      expect(tr.request.method).toBe('GET');
      httpController.verify();
    }));

    it('should handle errors', done => inject([ServersService], (service: ServersService) => {
      service.getServers().subscribe(servers => {
        expect(servers).toBeTruthy();
        expect(servers.length).toBe(0);
        done();
      });

      httpController.expectOne('FAKE_HOST/servers').error(new ErrorEvent('timeout'));
    })());
  });
});
