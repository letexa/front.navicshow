import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from "rxjs/Observable";
import { RestDataSource } from './rest.datasource';
import { Article } from './article.model';

@Injectable()
export class ArticleDetailResolve implements Resolve<any> {
    constructor(private articleService: RestDataSource) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Article> {
        let id = route.params['id'];
        return this.articleService.getArticle(id).map(response => {
            return response;
        });
    }
}