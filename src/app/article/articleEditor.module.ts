import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModelModule } from '../model/model.module';
import { ArticleEditorComponent } from './articleEditor.component';

@NgModule({
  declarations: [ArticleEditorComponent],
  imports: [
    BrowserModule,
    ModelModule,
    RouterModule
  ],
  exports: [ArticleEditorComponent],
})
export class ArticleEditorModule { }
