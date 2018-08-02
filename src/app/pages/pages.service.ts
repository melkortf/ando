import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Page } from './models/page';
import { retry } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Fetch the page from the internet.
   * @param page The page to be fetched.
   */
  fetchPage(page: Page): Observable<string> {
    if (page.source) {
      return this.http.get(page.source, { responseType: 'text' })
        .pipe(
          retry(3)
        );
    } else {
      throw new Error(`no source defined for page ${page.slug}`);
    }
  }
}
