import { ReplaySubject } from 'rxjs';
import { Daemon } from '../models';

export class DaemonTestingService {
  private daemon = new ReplaySubject<Daemon>(1);

  getDaemon() {
    return this.daemon.asObservable();
  }

  nextDaemon(daemon: Daemon) {
    this.daemon.next(daemon);
  }
}
