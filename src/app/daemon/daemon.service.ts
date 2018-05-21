import { Injectable, InjectionToken, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject, of } from 'rxjs';
import { Daemon } from './models';
import { AnneEndpointsService } from '../anne-endpoints.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DaemonService {

  private daemon = new ReplaySubject<Daemon>(1);

  constructor(
    private http: HttpClient,
    private anneEndpoints: AnneEndpointsService
  ) {
    this.fetchDaemonInfo();
  }

  getDaemon() {
    return this.daemon.asObservable();
  }

  private fetchDaemonInfo() {
    this.http.get(this.anneEndpoints.daemon)
      .pipe(
        catchError(err => of({ version: 'unknown' }))
      )
      .subscribe(this.daemon);
  }

}
