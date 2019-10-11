import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ArticleMenuModule } from '../../widget/article-menu/article.menu.module';
import { EditComponent } from './edit.component';

@NgModule({
  declarations: [EditComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ArticleMenuModule
  ],
})

export class EditModule { }