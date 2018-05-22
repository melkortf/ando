import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Page } from './models/page';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PageResolverService implements Resolve<Page> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const slug = route.paramMap.get('slug');
    return environment.pages.find(p => p.slug === slug);
  }

}
