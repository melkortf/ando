import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Server } from '../models';
import { ServersService } from '../servers.service';

@Component({
  selector: 'ando-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css']
})
export class ServerListComponent {

  servers: Observable<Server[]>;

  constructor(
    private serversService: ServersService
  ) {
    this.servers = this.serversService.getServers();
  }
}
