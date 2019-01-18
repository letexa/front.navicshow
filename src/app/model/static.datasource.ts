import { Injectable } from "@angular/core";
import { Article } from "./article.model";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";

@Injectable()
export class StaticDataSource {
    private articles: Article[] = [
        new Article(1, 'Статья 1', 'Текст статьи 1', 1),
        new Article(2, 'Статья 2', 'Текст статьи 2', 1),
        new Article(3, 'Статья 3', 'Текст статьи 3', 1)
    ];

    getArticles(): Observable<Article[]> {
        return Observable.from([this.articles]);
    }
}