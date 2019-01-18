import { NgModule } from "@angular/core";
import { ArticleRepository } from "./article.repository";
import { RestDataSource } from "./rest.datasource";
import { HttpModule } from "@angular/http";

@NgModule({
    providers: [ArticleRepository, RestDataSource]
})
export class ModelModule { }