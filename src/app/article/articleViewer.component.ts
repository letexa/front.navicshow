import { Component } from '@angular/core';
import { Article } from "../model/article.model";
import { ActivatedRoute } from '@angular/router';
import "rxjs/add/operator/map";

@Component({
    templateUrl: 'articleViewer.component.html'
})

export class ArticleViewerComponent {
    
    private article: Article = new Article();
    
    constructor(private activatedRoute: ActivatedRoute) { }
    
    ngOnInit() {
        this.activatedRoute.data.subscribe(({ article }) => {
            this.article = article;
        });
    }
    
}