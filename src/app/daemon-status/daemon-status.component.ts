import { Component, OnInit } from '@angular/core';
import { MorgothService } from '../morgoth/morgoth.service';

@Component({
  selector: 'ando-daemon-status',
  templateUrl: './daemon-status.component.html',
  styleUrls: ['./daemon-status.component.css']
})
export class DaemonStatusComponent implements OnInit {

  status: string;
  icon: 'info' | 'error';

  constructor(
    private morgoth: MorgothService
  ) {
    this.icon = 'info';
    this.status = '';
  }

  ngOnInit() {
    this.morgoth.getError().subscribe(
      error => { this.status = 'morgoth daemon unavailable'; this.icon = 'error'; }
    );

    this.morgoth.getInfo().subscribe(
      info => this.status = 'morgoth daemon version ' + info.version
    );
  }

}
