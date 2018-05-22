import { Component, Input } from '@angular/core';
import { Page } from '../models/page';
import { PagesService } from '../pages.service';

@Component({
  selector: 'ando-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent {

  @Input()
  set page(page: Page) {
    this.pagesService.fetchPage(page)
      .subscribe(
        body => this.body = body,
        error => this.error = error
      );
  }

  body: string | undefined;
  error: string | undefined;

  constructor(
    private pagesService: PagesService
  ) { }

}
