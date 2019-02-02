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

}
