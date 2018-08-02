import { TestBed, inject } from '@angular/core/testing';
import { PagesService } from './pages.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Page } from './models/page';

describe('PagesService', () => {
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ PagesService ],
    });

    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([PagesService], (service: PagesService) => {
    expect(service).toBeTruthy();
  }));

  describe('#fetchPage()', () => {
    it('should fetch a given page', inject([PagesService], (service: PagesService) => {
      const page: Page = {
        slug: 'FAKE_SLUG',
        source: 'FAKE_HOST'
      };

      service.fetchPage(page).subscribe();
      const req = httpTestingController.expectOne('FAKE_HOST');
      expect(req.request.responseType).toEqual('text');
      httpTestingController.verify();
    }));

    it('should fail if page source is uknown', inject([PagesService], (service: PagesService) => {
      const page: Page = {
        slug: 'FAKE_SLUG'
      };

      expect(() => service.fetchPage(page).subscribe()).toThrow();
      httpTestingController.verify();
    }));
  });
});
