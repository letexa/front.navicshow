import { NgModule } from '@angular/core';
import { ArticleRoutingModule } from './article-routing.module';
import { ListModule } from './list/list.module';
import { EditModule } from './edit/edit.module';
import { ArticleRest } from "./article.rest.service";

@NgModule({
  imports: [
    ArticleRoutingModule,
    ListModule,
    EditModule
  ],
  providers: [
    ArticleRest
  ],
})

export class ArticleModule { }