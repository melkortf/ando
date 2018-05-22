import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageContainerComponent } from './page-container.component';
import { ActivatedRoute } from '@angular/router';
import { Page } from '../models/page';
import { of } from 'rxjs';

const page: Page = {
  slug: 'FAKE_SLUG'
};

describe('PageContainerComponent', () => {
  let component: PageContainerComponent;
  let fixture: ComponentFixture<PageContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageContainerComponent ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { data: of(page)}
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
