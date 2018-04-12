import { NgModule } from '@angular/core';
import { MORGOTH_DOMAIN, MorgothService } from './morgoth.service';
import { environment } from '../../environments/environment';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule,
  ],
  exports: [
    MorgothService,
  ],
  providers: [
    {
      provide: MORGOTH_DOMAIN,
      useValue: environment.morgothDomain
    }
  ]
})
export class MorgothModule { }
