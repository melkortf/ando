import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageContainerComponent } from './page-container/page-container.component';
import { PageResolverService } from './page-resolver.service';

const routes: Routes = [
  {
    path: 'pages/:slug',
    component: PageContainerComponent,
    resolve: {
      page: PageResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
