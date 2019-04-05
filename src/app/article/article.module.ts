import { NgModule } from '@angular/core';
import { ArticleRoutingModule } from './article-routing.module';
import { ListModule } from './list/list.module';
import { EditModule } from './edit/edit.module';

@NgModule({
  imports: [
    ArticleRoutingModule,
    ListModule,
    EditModule
  ],
})

export class ArticleModule { }