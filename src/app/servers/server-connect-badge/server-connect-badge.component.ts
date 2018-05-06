import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Server } from '../../morgoth/models/server';
import * as urlParse from 'url-parse';

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
    const url = urlParse(this.server.address);
    const port = url.port || 27015;
    return this.sanitizer.bypassSecurityTrustUrl(url.protocol + '//connect/' + url.hostname + ':' + port);
  }

}
