import { Component, Input } from '@angular/core';
import { Page } from '../models/page';

@Component({
  selector: 'ando-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent {

  @Input()
  page: Page;

}
