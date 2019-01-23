import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ArticleModule } from './article/article.module';
import { ArticleViewerModule } from './article/articleViewer.module';
import { AppConfig } from './app.config';

import { ArticleComponent } from './article/article.component';
import { ArticleViewerComponent } from './article/articleViewer.component';

export function initializeApp(appConfig: AppConfig) {
    return () => appConfig.load();
}

const appRoutes: Routes =[
    { path: "", component:  ArticleComponent },
    { path: "article/:id", component:  ArticleViewerComponent },
    { path: "**", redirectTo: "/" }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ArticleModule,
    ArticleViewerModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
        AppConfig,
        { provide: APP_INITIALIZER,
         useFactory: initializeApp,
         deps: [AppConfig], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
