import { NgModule } from "@angular/core";
import { ArticleRepository } from "./article.repository";
import { StaticDataSource } from "./static.datasource";
import { RestDataSource } from "./rest.datasource";
import { HttpModule } from "@angular/http";

@NgModule({
    providers: [ArticleRepository, { provide: StaticDataSource, useClass: RestDataSource }]
})
export class ModelModule { }