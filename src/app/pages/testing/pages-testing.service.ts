import { Page } from '../models/page';
import { Observable, of } from 'rxjs';

export class PagesTestingService {
  fetchPage(page: Page): Observable<string> {
    return of('FAKE_BODY');
  }
}
