import { Injectable, InjectionToken, Inject } from '@angular/core';
import { SocialLink } from './models/social-link';

export let SOCIAL_LINKS = new InjectionToken<SocialLink[]>('social links');

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  readonly icons = new Map([
    [ 'github', 'assets/github-circle.svg' ],
    [ 'steam', 'assets/steam.svg' ]
  ]);

  constructor(
    @Inject(SOCIAL_LINKS) public socialLinks: SocialLink[]
  ) {
    this.resolveIcons();
  }

  private resolveIcons() {
    this.socialLinks.map(l => l.iconSource = l.iconSource ? l.iconSource : this.icons.get(l.icon));
  }
}
