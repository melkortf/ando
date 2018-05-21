import { Injectable, InjectionToken, Inject } from '@angular/core';

export const ANNE_DOMAIN = new InjectionToken<string>('anne.domain');

@Injectable({
  providedIn: 'root'
})
export class AnneEndpointsService {

  readonly daemon: string;
  readonly servers: string;

  constructor(
    @Inject(ANNE_DOMAIN) private anneDomain: string
  ) {
    this.daemon = `${this.anneDomain}/daemon`;
    this.servers = `${this.anneDomain}/servers`;
  }

}
