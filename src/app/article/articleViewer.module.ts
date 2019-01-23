import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModelModule } from '../model/model.module';
import { ArticleViewerComponent } from './articleViewer.component';

@NgModule({
  declarations: [ArticleViewerComponent],
  imports: [
    BrowserModule,
    ModelModule,
    RouterModule
  ],
  exports: [ArticleViewerComponent],
})
export class ArticleViewerModule { }
