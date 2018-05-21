import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from '../shared/shared.module';
import { ServersRoutingModule } from './servers-routing.module';
import { ServerListComponent } from './server-list/server-list.component';
import { ServerItemComponent } from './server-item/server-item.component';
import { ServerStatusBadgeComponent } from './server-status-badge/server-status-badge.component';
import { ServerConnectBadgeComponent } from './server-connect-badge/server-connect-badge.component';

@NgModule({
  imports: [
    CommonModule,
    ServersRoutingModule,
    SharedModule,
    NgbModule,
  ],
  declarations: [
    ServerListComponent,
    ServerItemComponent,
    ServerStatusBadgeComponent,
    ServerConnectBadgeComponent,
  ],
  exports: [
    ServerListComponent,
  ]
})
export class ServersModule { }
