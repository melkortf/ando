import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageContainerComponent } from './page-container.component';
import { ActivatedRoute } from '@angular/router';
import { Page } from '../models/page';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

const mockPage: Page = {
  slug: 'FAKE_SLUG'
};

describe('PageContainerComponent', () => {
  let component: PageContainerComponent;
  let fixture: ComponentFixture<PageContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ActivatedRoute, useValue: { data: of(mockPage) } },
      ],
      declarations: [ PageContainerComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
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

  it('should render the <ando-page> tag', () => {
    const page = fixture.debugElement.query(By.css('ando-page'));
    expect(page).toBeTruthy();
  });

  it('should capture resolver\'s data', () => {
    expect(component.page).toBeTruthy();
  });
});
