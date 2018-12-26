import { Component, Input, OnInit } from '@angular/core';
import { Page } from '../models/page';
import { PagesService } from '../pages.service';
import { NgProgress, NgProgressRef } from '@ngx-progressbar/core';

@Component({
  selector: 'ando-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

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

  private progressRef: NgProgressRef;
  body: string | undefined;
  error: string | undefined;

  constructor(
    private pagesService: PagesService,
    private progress: NgProgress
  ) { }

  ngOnInit() {
    this.progressRef = this.progress.ref();
  }

}
