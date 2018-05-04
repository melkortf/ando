import { NgModule } from '@angular/core';
import { ErrorAlertComponent } from './error-alert/error-alert.component';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
  ],
  declarations: [
    ErrorAlertComponent
  ],
  exports: [
    ErrorAlertComponent
  ]
})
export class SharedModule { }
