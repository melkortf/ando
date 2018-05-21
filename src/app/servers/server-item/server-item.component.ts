import { Component, Input } from '@angular/core';
import { Server } from '../models';

@Component({
  selector: 'ando-server-item',
  templateUrl: './server-item.component.html',
  styleUrls: ['./server-item.component.css']
})
export class ServerItemComponent {

  @Input()
  server: Server;

}
