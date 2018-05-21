import { TestBed, inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AnneEndpointsService, ANNE_DOMAIN } from './anne-endpoints.service';

describe('AnneEndpointsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AnneEndpointsService,
        {
          provide: ANNE_DOMAIN,
          useValue: 'FAKE_HOST'
        }
      ]
    });
  });

  it('should be created', () => {
    const service = TestBed.get(AnneEndpointsService);
    expect(service).toBeTruthy();
  });

  it('should provide valid endpoints', () => {
    const service = TestBed.get(AnneEndpointsService);
    expect(service.servers).toEqual('FAKE_HOST/servers');
    expect(service.daemon).toEqual('FAKE_HOST/daemon');
  });
});
