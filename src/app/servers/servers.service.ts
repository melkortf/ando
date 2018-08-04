import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { ReplaySubject, of } from 'rxjs';
import { Server } from './models';
import { ServerImpl } from './server-impl';
import { ANNE_DOMAIN } from '../anne-domain';

@Injectable({
  providedIn: 'root'
})
export class ServersService {

  private servers = new ReplaySubject<Server[]>(1);

  constructor(
    private http: HttpClient,
    @Inject(ANNE_DOMAIN) private domain: string,
  ) {
    this.http.get<Server[]>(`${this.domain}/servers`)
      .pipe(
        map(servers => servers.map(s => new ServerImpl(`${this.domain}/servers`, s))),
        catchError(() => of([]))
      )
      .subscribe(this.servers);
  }

  getServers() {
    return this.servers.asObservable();
  }
}
