import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageContainerComponent } from './page-container.component';
import { ActivatedRoute } from '@angular/router';
import { Page } from '../models/page';
import { of } from 'rxjs';
import { PageComponent } from '../page/page.component';
import { PagesService } from '../pages.service';
import { PagesTestingService } from '../testing/pages-testing.service';
import { MarkdownModule } from 'ngx-markdown';
import { NgProgressModule } from '@ngx-progressbar/core';

const page: Page = {
  slug: 'FAKE_SLUG'
};

describe('PageContainerComponent', () => {
  let component: PageContainerComponent;
  let fixture: ComponentFixture<PageContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageContainerComponent,
        PageComponent,
      ],
      imports: [
        NgProgressModule.forRoot(),
        MarkdownModule.forRoot(),
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { data: of(page) }
        },
        {
          provide: PagesService,
          useClass: PagesTestingService
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
