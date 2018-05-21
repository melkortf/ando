import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaemonStatusComponent } from './daemon-status/daemon-status.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: [
    DaemonStatusComponent,
  ],
  exports: [
    DaemonStatusComponent,
  ]
})
export class DaemonModule { }
