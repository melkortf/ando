import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import * as urlParse from 'url-parse';
import { Server } from '../models';

@Component({
  selector: 'ando-server-connect-badge',
  templateUrl: './server-connect-badge.component.html',
  styleUrls: ['./server-connect-badge.component.css']
})
export class ServerConnectBadgeComponent {

  @Input()
  server: Server;

  constructor(private sanitizer: DomSanitizer) {}

  canConnect(): boolean {
    return !!this.server
      && this.server.state === 'Running'
      && this.server.address.length > 0;
      // todo !this.server.passwordProtected
  }

  get connect(): SafeUrl {
    const url = urlParse(this.server.address);
    const port = url.port || 27015;
    return this.sanitizer.bypassSecurityTrustUrl(url.protocol + '//connect/' + url.hostname + ':' + port);
  }

}
