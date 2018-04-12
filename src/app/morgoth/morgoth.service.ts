import { Injectable, InjectionToken, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerInfo } from './models/server-info';
import { Observable } from 'rxjs/Observable';

export const MORGOTH_DOMAIN = new InjectionToken<string>('morgoth.domain');

@Injectable()
export class MorgothService {

  private serversEndpoint;

  constructor(
    private http: HttpClient,
    @Inject(MORGOTH_DOMAIN) private morgothUrl: string
  ) {
    this.serversEndpoint = morgothUrl + '/servers';
  }

  getServers(): Observable<ServerInfo[]> {
    return this.http.get<ServerInfo[]>(this.serversEndpoint);
  }

}
