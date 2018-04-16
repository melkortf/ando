import { Component, OnInit } from '@angular/core';
import { MorgothService } from '../morgoth/morgoth.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'ando-morgoth-error-alert',
  templateUrl: './morgoth-error-alert.component.html',
  styleUrls: ['./morgoth-error-alert.component.css']
})
export class MorgothErrorAlertComponent {

  error: Observable<string>;

  constructor(
    private morgoth: MorgothService
  ) {
    this.error = morgoth.getError();
  }

}
