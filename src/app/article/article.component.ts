import { Component } from '@angular/core';
import { Article } from "../model/article.model";
import { ArticleRepository } from "../model/article.repository";

@Component({
    selector: 'article',
    moduleId: module.id,
    templateUrl: 'article.component.html'
})

export class ArticleComponent {
    
    constructor(private repository: ArticleRepository) { }
    
    get articles(): Article[] {
        return this.repository.getArticles();
    }
}