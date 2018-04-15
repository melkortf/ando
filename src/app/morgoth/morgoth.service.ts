import { Injectable, InjectionToken, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ServerInfo } from './models/server-info';
import { Observable } from 'rxjs/Observable';
import { DaemonInfo } from './models/daemon-info';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs/ReplaySubject';

export const MORGOTH_DOMAIN = new InjectionToken<string>('morgoth.domain');

@Injectable()
export class MorgothService {

  info: ReplaySubject<DaemonInfo>;
  serversEndpoint: string;

  constructor(
    private http: HttpClient,
    @Inject(MORGOTH_DOMAIN) private morgothUrl: string
  ) {
    this.info = new ReplaySubject<DaemonInfo>(1);

    this.serversEndpoint = morgothUrl + '/servers';

    this.http.get<DaemonInfo>(this.morgothUrl + '/').subscribe(
      info => this.info.next(info),
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof Error) {
      return new ErrorObservable(error.error.message);
    } else {
      return new ErrorObservable(`${error.status}: ${error.statusText}`);
    }
  }

  getInfo(): Observable<DaemonInfo> {
    return this.info.asObservable();
  }

  getServers(): Observable<ServerInfo[]> {
    return this.http.get<ServerInfo[]>(this.serversEndpoint).pipe(
      catchError(this.handleError),
    );
  }

}
