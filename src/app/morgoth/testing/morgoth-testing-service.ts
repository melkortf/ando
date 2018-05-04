import { Observable } from 'rxjs/Observable';
import { Daemon } from '../models/daemon';
import { Server } from '../models/server';
import { Subject } from 'rxjs/Subject';

export class MorgothTestingService {
  info = new Subject<Daemon>();
  servers = new Subject<Server[]>();
  error = new Subject<string>();

  getError(): Observable<string> {
    return this.error.asObservable();
  }

  nextError(error: string) {
    this.error.next(error);
  }

  getInfo(): Observable<Daemon> {
    return this.info.asObservable();
  }

  nextInfo(info: Daemon) {
    this.info.next(info);
  }

  getServers(): Observable<Server[]> {
    return this.servers.asObservable();
  }
}
