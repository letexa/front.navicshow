import { NgModule } from '@angular/core';
import { ArticleMenuModule } from '../../widget/article-menu/article.menu.module';
import { EditComponent } from './edit.component';

@NgModule({
  declarations: [EditComponent],
  imports: [ 
    ArticleMenuModule
  ],
})

export class EditModule { }