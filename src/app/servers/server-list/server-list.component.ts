import { Component, OnInit } from '@angular/core';
import { MorgothService } from '../../morgoth/morgoth.service';
import { ServerInfo } from '../../morgoth/models/server-info';

@Component({
  selector: 'ando-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css'],
  providers: [MorgothService]
})
export class ServerListComponent implements OnInit {

  servers: ServerInfo[];
  error;

  constructor(
    private morgoth: MorgothService
  ) { }

  ngOnInit() {
    this.getServers();
  }

  getServers() {
    this.morgoth.getServers()
      .subscribe(
        servers => this.servers = servers,
        error => this.error = error
      );
  }

}
