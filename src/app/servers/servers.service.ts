import { Injectable, InjectionToken, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { ReplaySubject, of } from 'rxjs';
import { Server } from './models';
import { ServerImpl } from './server-impl';
import { AnneEndpointsService } from '../anne-endpoints.service';

@Injectable({
  providedIn: 'root'
})
export class ServersService {

  private servers = new ReplaySubject<Server[]>(1);

  constructor(
    private http: HttpClient,
    private anneEndpoints: AnneEndpointsService
  ) {
    this.fetchServers();
  }

  getServers() {
    return this.servers.asObservable();
  }

  private fetchServers() {
    this.http.get<Server[]>(this.anneEndpoints.servers)
      .pipe(
        map(servers => servers.map(s => new ServerImpl(this.anneEndpoints.servers, s))),
        catchError(err => of([]))
      )
      .subscribe(this.servers);
  }
}
