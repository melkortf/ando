import { Component, Input } from '@angular/core';
import { Page } from '../models/page';
import { PagesService } from '../pages.service';
import { NgProgress } from '@ngx-progressbar/core';

@Component({
  selector: 'ando-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent {

  @Input()
  set page(page: Page) {
    this.progress.start();
    this.pagesService.fetchPage(page)
      .subscribe(
        body => this.body = body,
        error => this.error = error,
        this.progress.complete.bind(this.progress)
      );
  }

  body: string | undefined;
  error: string | undefined;

  constructor(
    private pagesService: PagesService,
    private progress: NgProgress
  ) { }

}
