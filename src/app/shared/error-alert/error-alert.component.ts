import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ando-error-alert',
  templateUrl: './error-alert.component.html',
  styleUrls: ['./error-alert.component.css']
})
export class ErrorAlertComponent {

  @Input()
  message: string;

}
