import { Component } from '@angular/core';
import { DaemonService } from '../daemon.service';
import { Daemon } from '../models';
import { Observable } from 'rxjs';

@Component({
  selector: 'ando-daemon-status',
  templateUrl: './daemon-status.component.html',
  styleUrls: ['./daemon-status.component.css']
})
export class DaemonStatusComponent {

  daemon: Observable<Daemon>;

  constructor(
    private daemonService: DaemonService
  ) {
    this.daemon = this.daemonService.getDaemon();
  }

}
