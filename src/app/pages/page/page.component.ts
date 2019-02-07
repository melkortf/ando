import { Component, Input, OnInit } from '@angular/core';
import { Page } from '../models/page';
import { PagesService } from '../pages.service';
import { NgProgress, NgProgressRef } from '@ngx-progressbar/core';

@Component({
  selector: 'ando-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent {

  private progressRef: NgProgressRef;
  body?: string;
  error?: string;

  @Input()
  set page(page: Page) {
    this.progressRef.start();
    this.pagesService.fetchPage(page)
      .subscribe(
        body => this.body = body,
        error => this.error = error,
        () => this.progressRef.complete(),
      );
  }

  constructor(
    private pagesService: PagesService,
    private progress: NgProgress
  ) {
    this.progressRef = this.progress.ref();
  }

}
