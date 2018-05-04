import { Component, Input } from '@angular/core';
import { Server } from '../../morgoth/models/server';

@Component({
  selector: 'ando-server-status-badge',
  templateUrl: './server-status-badge.component.html',
  styleUrls: ['./server-status-badge.component.css']
})
export class ServerStatusBadgeComponent {

  @Input()
  server: Server;

  stateText(state: string): string {
    switch (state) {
      case 'Offline':
        return 'offline';

      case 'Running':
        return 'running';

      case 'Starting':
        return 'starting';

      case 'ShuttingDown':
        return 'shutting down';

      case 'Crashed':
        return 'crashed';

      default:
        return state;
    }
  }

}
