import { Injectable, InjectionToken, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Server } from './models/server';
import { Observable } from 'rxjs/Observable';
import { Daemon } from './models/daemon';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import * as ioClient from 'socket.io-client';

export const MORGOTH_DOMAIN = new InjectionToken<string>('morgoth.domain');

@Injectable()
export class MorgothService {

  info: ReplaySubject<Daemon>;
  servers: ReplaySubject<Server[]>;
  error: ReplaySubject<string>;

  constructor(
    private http: HttpClient,
    @Inject(MORGOTH_DOMAIN) private morgothUrl: string
  ) {
    this.info = new ReplaySubject<Daemon>(1);
    this.servers = new ReplaySubject<Server[]>(1);
    this.error = new ReplaySubject<string>(1);

    this.http.get<Daemon>(`${this.morgothUrl}/daemon`).subscribe(
      info => this.info.next(info),
      error => this.handleError(error),
    );

    this.http.get<Server[]>(`${this.morgothUrl}/servers`).subscribe(
      servers => {
        this.servers.next(servers);
        for (const s of servers) {
          const io = ioClient(`${this.morgothUrl}/servers/${s.name}`);
          io.on('stateChanged', state => s.state = state);
          io.on('hostnameChanged', hostname => s.hostname = hostname);
          io.on('playerCountChanged', playerCount => s.playerCount = playerCount);
          io.on('maxPlayersChanged', maxPlayers => s.maxPlayers = maxPlayers);
          io.on('mapChanged', map => s.map = map);
          io.on('addressChanged', address => s.address = address);
        }
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

  getInfo(): Observable<Daemon> {
    return this.info.asObservable();
  }

  getServers(): Observable<Server[]> {
    return this.servers.asObservable();
  }

}
