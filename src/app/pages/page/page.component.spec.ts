import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { PageComponent } from './page.component';
import { PagesService } from '../pages.service';
import { By } from '@angular/platform-browser';
import { NgProgress } from '@ngx-progressbar/core';
import { MarkdownModule } from 'ngx-markdown';
import { Page } from '../models/page';
import { of, throwError } from 'rxjs';

class PagesServiceStub {
  fetchPage(_page: Page) { return of('FAKE_BODY'); }
}

class NgProgressStub {
  start() { }
  complete() { }
}

describe('PageComponent', () => {
  let component: PageComponent;
  let fixture: ComponentFixture<PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageComponent ],
      imports: [
        MarkdownModule.forRoot(),
      ],
      providers: [
        { provide: PagesService, useClass: PagesServiceStub },
        { provide: NgProgress, useClass: NgProgressStub },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the <markdown> tag', () => {
    component.body = 'FAKE_BODY';
    fixture.detectChanges();

    const markdown = fixture.debugElement.query(By.css('markdown'));
    expect(markdown).toBeTruthy();
  });

  it('should show error alert', () => {
    component.error = 'FAKE_ERROR';
    fixture.detectChanges();

    const alert = fixture.debugElement.query(By.css('div.alert')).nativeElement as HTMLElement;
    expect(alert.innerText).toEqual('FAKE_ERROR');
    expect(alert.classList.contains('alert-danger')).toBe(true);
  });

  describe('#set page()', () => {
    let mockPage: Page;
    let pagesService: PagesService;

    beforeEach(() => {
      mockPage = { slug: 'FAKE_SLUG', source: 'FAKE_SOURCE' };
      pagesService = TestBed.get(PagesService);
    });

    it('should call PagesService.fetchPage()', () => {
      const spy = spyOn(pagesService, 'fetchPage').and.callThrough();
      component.page = mockPage;
      expect(spy).toHaveBeenCalledWith(mockPage);
    });

    it('should start & stop the progress ', fakeAsync(() => {
      const progress = TestBed.get(NgProgress);
      const startSpy = spyOn(progress, 'start');
      const completeSpy = spyOn(progress, 'complete');

      component.page = mockPage;
      expect(startSpy).toHaveBeenCalled();

      tick();
      expect(completeSpy).toHaveBeenCalled();
    }));

    it('should handle errors', () => {
      spyOn(pagesService, 'fetchPage').and.returnValue(throwError('FAKE_ERROR'));
      component.page = mockPage;
      expect(component.error).toBe('FAKE_ERROR');
    });
  });
});
