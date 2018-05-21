import { ReplaySubject } from 'rxjs';
import { Server } from '../models';

export class ServersTestingService {
  private servers = new ReplaySubject<Server[]>(1);

  getServers() {
    return this.servers.asObservable();
  }

  nextServers(servers: Server[]) {
    this.servers.next(servers);
  }
}
