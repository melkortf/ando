import { Component, Input } from '@angular/core';
import { ServerInfo } from '../../morgoth/models/server-info';

@Component({
  selector: 'ando-server-item',
  templateUrl: './server-item.component.html',
  styleUrls: ['./server-item.component.css']
})
export class ServerItemComponent {

  @Input()
  server: ServerInfo;

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
