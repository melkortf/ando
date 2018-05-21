import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { ServersModule } from './servers/servers.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { DaemonModule } from './daemon/daemon.module';
import { ANNE_DOMAIN } from './anne-endpoints.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DaemonModule,
    SharedModule,
    ServersModule,
    AppRoutingModule,
    NgbModule.forRoot(),
  ],
  providers: [
    {
      provide: ANNE_DOMAIN,
      useValue: environment.anneDomain
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
