import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MorgothModule } from './morgoth/morgoth.module';
import { SharedModule } from './shared/shared.module';
import { DaemonStatusComponent } from './daemon-status/daemon-status.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ServersModule } from './servers/servers.module';

@NgModule({
  declarations: [
    AppComponent,
    DaemonStatusComponent,
  ],
  imports: [
    BrowserModule,
    MorgothModule,
    SharedModule,
    ServersModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
