import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DaemonService } from './daemon.service';
import { Daemon } from './models';
import { ANNE_DOMAIN } from '../anne-domain';

describe('DaemonService', () => {
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaemonService,
        { provide: ANNE_DOMAIN, useValue: 'FAKE_HOST' },
      ],
      imports: [HttpClientTestingModule]
    });

    httpController = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([DaemonService], (service: DaemonService) => {
    expect(service).toBeTruthy();
  }));

  it('should query anne endpoint', inject([DaemonService], (service: DaemonService) => {
    const tr = httpController.expectOne('FAKE_HOST/daemon');
    expect(tr.request.method).toBe('GET');
    httpController.verify();
  }));

  describe('#getDaemon()', () => {
    it('should return daemon info', done => inject([DaemonService], (service: DaemonService) => {
      const mockDaemon: Daemon = { version: 'FAKE_VERSION' };

      service.getDaemon().subscribe(daemon => {
        expect(daemon).toEqual(mockDaemon);
        done();
      });

      httpController.expectOne('FAKE_HOST/daemon').flush(mockDaemon);
    })());

    it('should handle errors', done => inject([DaemonService], (service: DaemonService) => {
      service.getDaemon().subscribe(daemon => {
        expect(daemon.version).toBe('unknown');
        done();
      });

      httpController.expectOne('FAKE_HOST/daemon').error(new ErrorEvent('FAKE_ERROR'));
    })());
  });
});
