import { Component, OnInit } from '@angular/core';
import { MorgothService } from '../../morgoth/morgoth.service';
import { ServerInfo } from '../../morgoth/models/server-info';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'ando-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css'],
  providers: [MorgothService]
})
export class ServerListComponent {

  servers: Observable<ServerInfo[]>;

  constructor(
    private morgoth: MorgothService
  ) {
    this.servers = this.morgoth.getServers();
  }
}
