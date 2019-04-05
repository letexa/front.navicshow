import { NgModule } from '@angular/core';
import { ArticleMenuModule } from '../../widget/article-menu/article.menu.module';
import { ListComponent } from './list.component';

@NgModule({
  declarations: [ListComponent],
  imports: [ 
    ArticleMenuModule
  ],
})

export class ListModule { }