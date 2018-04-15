import { Component, OnInit } from '@angular/core';
import { MorgothService } from '../../morgoth/morgoth.service';
import { ServerInfo } from '../../morgoth/models/server-info';

@Component({
  selector: 'ando-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css'],
  providers: [MorgothService]
})
export class ServerListComponent {

  servers;
  error;

  constructor(
    private morgoth: MorgothService
  ) {
    this.servers = this.morgoth.getServers();
  }
}
