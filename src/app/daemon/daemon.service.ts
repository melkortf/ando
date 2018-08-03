import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject, of } from 'rxjs';
import { Daemon } from './models';
import { catchError } from 'rxjs/operators';
import { ANNE_DOMAIN } from '../anne-domain';

@Injectable({
  providedIn: 'root'
})
export class DaemonService {

  private daemon = new ReplaySubject<Daemon>(1);

  constructor(
    private http: HttpClient,
    @Inject(ANNE_DOMAIN) private domain: string,
  ) {
    this.http.get(`${this.domain}/daemon`)
      .pipe(
        catchError(() => of({ version: 'unknown' })),
      )
      .subscribe(this.daemon);
  }

  getDaemon() {
    return this.daemon.asObservable();
  }

}
