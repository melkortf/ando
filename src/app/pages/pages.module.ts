import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';

import { PagesRoutingModule } from './pages-routing.module';
import { PageContainerComponent } from './page-container/page-container.component';
import { HttpClientModule } from '@angular/common/http';
import { PageComponent } from './page/page.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    PagesRoutingModule,
    MarkdownModule.forChild(),
  ],
  declarations: [
    PageContainerComponent,
    PageComponent,
  ]
})
export class PagesModule { }
