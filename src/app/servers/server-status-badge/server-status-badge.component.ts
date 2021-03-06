import { Component, Input } from '@angular/core';
import { Server } from '../models';

@Component({
  selector: 'ando-server-status-badge',
  templateUrl: './server-status-badge.component.html',
  styleUrls: ['./server-status-badge.component.css']
})
export class ServerStatusBadgeComponent {

  @Input()
  server: Server;

  readonly stateMap = new Map([
    [ 'Offline', 'offline' ],
    [ 'Running', 'running' ],
    [ 'Starting', 'starting' ],
    [ 'ShuttingDown', 'shutting down' ],
    [ 'Crashed', 'crashed' ]
  ]);

  get state(): string {
    return this.stateMap.get(this.server.state);
  }

}
