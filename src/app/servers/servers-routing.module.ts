import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServerListComponent } from './server-list/server-list.component';

const routes: Routes = [
  {
    path: 'servers',
    component: ServerListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServersRoutingModule { }
