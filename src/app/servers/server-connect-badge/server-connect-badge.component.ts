import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Server } from '../../morgoth/models/server';

@Component({
  selector: 'ando-server-connect-badge',
  templateUrl: './server-connect-badge.component.html',
  styleUrls: ['./server-connect-badge.component.css']
})
export class ServerConnectBadgeComponent {

  @Input()
  server: Server;

  constructor(private sanitizer: DomSanitizer) {}

  get connect(): SafeUrl {
    if (!this.server) {
      return '#';
    }

    return this.sanitizer.bypassSecurityTrustUrl('steam://connect/melkor.tf:27015');
  }

}
