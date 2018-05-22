import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageComponent } from './page.component';
import { Page } from '../models/page';
import { Observable, of } from 'rxjs';
import { PagesService } from '../pages.service';
import { PagesTestingService } from '../testing/pages-testing.service';
import { By } from '@angular/platform-browser';
import { NgProgressModule } from '@ngx-progressbar/core';
import { MarkdownModule } from 'ngx-markdown';

describe('PageComponent', () => {
  let component: PageComponent;
  let fixture: ComponentFixture<PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageComponent ],
      imports: [
        NgProgressModule.forRoot(),
        MarkdownModule.forRoot(),
      ],
      providers: [
        {
          provide: PagesService,
          useClass: PagesTestingService
        }
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

  it('should show error alert', () => {
    component.error = 'FAKE_ERROR';
    fixture.detectChanges();

    const alert = fixture.debugElement.query(By.css('div.alert')).nativeElement as HTMLElement;
    expect(alert.innerText).toEqual('FAKE_ERROR');
    expect(alert.classList.contains('alert-danger')).toBe(true);
  });
});
