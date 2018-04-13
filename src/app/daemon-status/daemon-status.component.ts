import { Component, OnInit } from '@angular/core';
import { MorgothService } from '../morgoth/morgoth.service';

@Component({
  selector: 'ando-daemon-status',
  templateUrl: './daemon-status.component.html',
  styleUrls: ['./daemon-status.component.css']
})
export class DaemonStatusComponent implements OnInit {

  status: string;
  icon = 'info';

  constructor(
    private morgoth: MorgothService
  ) { }

  ngOnInit() {
    this.morgoth.getInfo().subscribe(
      info => this.status = 'morgoth daemon version ' + info.version,
      error => { this.status = 'offline'; this.icon = 'error'; }
    );
  }

}
