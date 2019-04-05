import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModelModule } from '../model/model.module';
import { ArticleComponent } from './article.component';
import { ArticleViewerComponent } from './articleViewer.component';

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ModelModule,
    RouterModule
  ],
  exports: [ArticleComponent],
})
export class ArticleModule { }
