import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialLinksComponent } from './social-links/social-links.component';
import { environment } from '../../environments/environment';
import { SOCIAL_LINKS } from './app-config.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SocialLinksComponent
  ],
  providers: [
    {
      provide: SOCIAL_LINKS,
      useValue: environment.socialLinks
    }
  ],
  exports: [
    SocialLinksComponent,
  ]
})
export class CoreModule { }
