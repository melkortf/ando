import { NgModule } from '@angular/core';
import { ErrorAlertComponent } from './error-alert/error-alert.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [ErrorAlertComponent],
  exports: [ErrorAlertComponent]
})
export class SharedModule { }
