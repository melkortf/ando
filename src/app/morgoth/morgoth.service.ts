import { Injectable, InjectionToken, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Server } from './models/server';
import { Observable } from 'rxjs/Observable';
import { DaemonInfo } from './models/daemon-info';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import * as socketIo from 'socket.io-client';

export const MORGOTH_DOMAIN = new InjectionToken<string>('morgoth.domain');

@Injectable()
export class MorgothService {

  info: ReplaySubject<DaemonInfo>;
  servers: ReplaySubject<Server[]>;
  error: ReplaySubject<string>;
  ioSocket; // todo

  constructor(
    private http: HttpClient,
    @Inject(MORGOTH_DOMAIN) private morgothUrl: string
  ) {
    this.info = new ReplaySubject<DaemonInfo>(1);
    this.servers = new ReplaySubject<Server[]>(1);
    this.error = new ReplaySubject<string>(1);

    this.http.get<DaemonInfo>(`${this.morgothUrl}/daemon`).subscribe(
      info => this.info.next(info),
      error => this.handleError(error),
    );

    this.http.get<Server[]>(`${this.morgothUrl}/servers`).subscribe(
      servers => {
        this.servers.next(servers);
      }
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof Error) {
      this.error.next(error.error.message);
    } else {
      this.error.next(`${error.status}: ${error.statusText}`);
    }
  }

  getError(): Observable<string> {
    return this.error.asObservable();
  }

  getInfo(): Observable<DaemonInfo> {
    return this.info.asObservable();
  }

  getServers(): Observable<Server[]> {
    return this.servers.asObservable();
  }

}
