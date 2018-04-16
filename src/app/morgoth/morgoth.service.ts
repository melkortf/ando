import { Injectable, InjectionToken, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ServerInfo } from './models/server-info';
import { Observable } from 'rxjs/Observable';
import { DaemonInfo } from './models/daemon-info';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import * as socketIo from 'socket.io-client';
import { ServerUpdate } from './models/server-update';

export const MORGOTH_DOMAIN = new InjectionToken<string>('morgoth.domain');

@Injectable()
export class MorgothService {

  info: ReplaySubject<DaemonInfo>;
  servers: ReplaySubject<ServerInfo[]>;
  error: ReplaySubject<string>;
  ioSocket;

  constructor(
    private http: HttpClient,
    @Inject(MORGOTH_DOMAIN) private morgothUrl: string
  ) {
    this.info = new ReplaySubject<DaemonInfo>(1);
    this.servers = new ReplaySubject<ServerInfo[]>(1);
    this.error = new ReplaySubject<string>(1);

    this.ioSocket = socketIo(`${this.morgothUrl}/`);

    this.http.get<DaemonInfo>(`${this.morgothUrl}/`).subscribe(
      info => this.info.next(info),
      error => this.handleError(error),
    );

    this.http.get<ServerInfo[]>(`${this.morgothUrl}/servers`).subscribe(
      servers => {
        this.servers.next(servers);
        this.ioSocket.on('serverUpdate', (data: ServerUpdate) => this.updateServer(servers, data));
      }
    );
  }

  private updateServer(servers: ServerInfo[], update: ServerUpdate) {
    const index = servers.findIndex(s => s.name === update.name);
    if (index !== -1) {
      const s = servers[index];
      servers.splice(index, 1, {
        ...s,
        ...update
      });
    }
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

  getServers(): Observable<ServerInfo[]> {
    return this.servers.asObservable();
  }

}
