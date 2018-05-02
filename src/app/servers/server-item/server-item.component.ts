import { Component, Input } from '@angular/core';
import { Server } from '../../morgoth/models/server';

@Component({
  selector: 'ando-server-item',
  templateUrl: './server-item.component.html',
  styleUrls: ['./server-item.component.css']
})
export class ServerItemComponent {

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
