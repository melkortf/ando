import { NgModule } from '@angular/core';
import { ErrorAlertComponent } from './error-alert/error-alert.component';
import { CommonModule } from '@angular/common';
import { SteamConnectLinkComponent } from './steam-connect-link/steam-connect-link.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ErrorAlertComponent,
    SteamConnectLinkComponent
  ],
  exports: [
    ErrorAlertComponent,
    SteamConnectLinkComponent
  ]
})
export class SharedModule { }
