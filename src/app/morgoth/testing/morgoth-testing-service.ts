import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { DaemonInfo } from '../models/daemon-info';
import { ServerInfo } from '../models/server-info';

export class MorgothTestingService {
  info = new ReplaySubject<DaemonInfo>(1);
  servers = new ReplaySubject<ServerInfo[]>(1);
  error = new ReplaySubject<string>(1);

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

  getServers(): Observable<ServerInfo[]> {
    return this.servers.asObservable();
  }
}
