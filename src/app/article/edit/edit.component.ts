import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleFormGroup } from './form.model';
import { ArticleRest } from '../article.rest.service';
import { Article } from '../article.model';
import { Category } from '../../category/category.model';
import { CategoryRest } from '../../category/category.rest.service';
import { Rest } from '../../rest.model';

@Component({
    templateUrl: './edit.component.html'
})

export class EditComponent {

    private isEdit: boolean = false;

    private formSubmitted: boolean = false;

    private formGroup: ArticleFormGroup = new ArticleFormGroup();

    private article: Article;

    private categories: Category[];

    constructor(
        private articleRest: ArticleRest,
        private categoryRest: CategoryRest,
        private router: Router,
        private activeRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        this.categoryRest.all()
            .toPromise()
            .then((data: Rest) => {
                if (data.code === 200 && data.message) {
                    /*this.isSpinner = false;
                    this.showCaterogies = true;*/
                    this.categories = Object.keys(data.message).map(key => ({
                        id: data.message[key].id,
                        name: data.message[key].name,
                        created: data.message[key].created,
                        updated: data.message[key].updated
                    }));
                }
            });
    }

    submitForm(form: NgForm) {
        this.formSubmitted = true;
        if (this.formGroup.valid) {
            this.article = this.article ? this.article : new Article();
            this.article.name = form.value.name;
            console.log(this.article);
            /*if (!this.isEdit) {
                this.rest.add(this.category, (res) => {
                    if (res.code && res.code === 200) {
                        this.router.navigateByUrl('/category');
                    }
                });
            } else {
                this.rest.update(this.category, (res) => {
                    if (res.code && res.code === 200) {
                        this.router.navigateByUrl('/category');
                    }
                });
            }*/
        }
    }
}
