import { Component, Input } from '@angular/core';

@Component({
  selector: 'ando-steam-connect-link',
  templateUrl: './steam-connect-link.component.html',
  styleUrls: ['./steam-connect-link.component.css']
})
export class SteamConnectLinkComponent {

  @Input()
  enabled = true;

}
