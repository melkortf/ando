import { Component, Input } from '@angular/core';
import { ServerInfo } from '../morgoth/models/server-info';

@Component({
  selector: 'ando-server-item',
  templateUrl: './server-item.component.html',
  styleUrls: ['./server-item.component.css']
})
export class ServerItemComponent {

  @Input()
  server: ServerInfo;

}
