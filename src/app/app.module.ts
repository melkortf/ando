import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MarkdownModule } from 'ngx-markdown';
import { NgProgressModule } from '@ngx-progressbar/core';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { DaemonModule } from './daemon/daemon.module';
import { PagesModule } from './pages/pages.module';
import { ServersModule } from './servers/servers.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { ANNE_DOMAIN } from './anne-domain';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    DaemonModule,
    PagesModule,
    SharedModule,
    ServersModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    MarkdownModule.forRoot(),
    NgProgressModule,
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
