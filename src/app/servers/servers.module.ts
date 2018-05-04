import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServersRoutingModule } from './servers-routing.module';
import { ServerListComponent } from './server-list/server-list.component';
import { ServerItemComponent } from './server-item/server-item.component';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
  ],
  exports: [
    ServerListComponent,
  ]
})
export class ServersModule { }
