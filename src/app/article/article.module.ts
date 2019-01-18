import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { ArticleComponent } from './article.component';

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ModelModule
  ],
  exports: [ArticleComponent],
})
export class ArticleModule { }
