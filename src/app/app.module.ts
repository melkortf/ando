import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ServerListComponent } from './server-list/server-list.component';
import { ServerItemComponent } from './server-item/server-item.component';
import { HttpClientModule } from '@angular/common/http';
import { MorgothModule } from './morgoth/morgoth.module';
import { SharedModule } from './shared/shared.module';
import { DaemonStatusComponent } from './daemon-status/daemon-status.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerListComponent,
    ServerItemComponent,
    DaemonStatusComponent,
  ],
  imports: [
    BrowserModule,
    MorgothModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
