import { Component } from '@angular/core';
import { Article } from "../model/article.model";
import { ArticleRepository } from "../model/article.repository";
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: 'articleViewer.component.html'
})

export class ArticleViewerComponent {
    
    private article: Article = new Article();
    
    constructor(private repository: ArticleRepository,
                private activatedRoute: ActivatedRoute) { }
    
    ngOnInit(): void {
        Object.assign(this.article, this.repository.getArticle(this.activatedRoute.snapshot.params['id']));
    }
}