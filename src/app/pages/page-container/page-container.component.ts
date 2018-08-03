import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';
import { Page } from '../models/page';
import { Observable } from 'rxjs';

@Component({
  selector: 'ando-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.css']
})
export class PageContainerComponent {

  page: Observable<Page>;

  constructor(
    private route: ActivatedRoute
  ) {
    this.page = this.route.data.pipe(
      pluck<{}, Page>('page')
    );
  }

}
