import { Observable } from 'rxjs/Observable';
import { DaemonInfo } from '../models/daemon-info';
import { Server } from '../models/server';
import { Subject } from 'rxjs/Subject';

export class MorgothTestingService {
  info = new Subject<DaemonInfo>();
  servers = new Subject<Server[]>();
  error = new Subject<string>();

  getError(): Observable<string> {
    return this.error.asObservable();
  }

  nextError(error: string) {
    this.error.next(error);
  }

  getInfo(): Observable<DaemonInfo> {
    return this.info.asObservable();
  }

  nextInfo(info: DaemonInfo) {
    this.info.next(info);
  }

  getServers(): Observable<Server[]> {
    return this.servers.asObservable();
  }
}
