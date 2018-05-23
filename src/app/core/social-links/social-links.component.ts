import { Component, InjectionToken, Inject } from '@angular/core';
import { SocialLink } from '../models/social-link';
import { AppConfigService } from '../app-config.service';

@Component({
  selector: 'ando-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.css']
})
export class SocialLinksComponent {

  socialLinks = this.appConfig.socialLinks;

  constructor(
    private appConfig: AppConfigService
  ) { }

}
