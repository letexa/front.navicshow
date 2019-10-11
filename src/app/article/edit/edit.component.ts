import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleFormGroup } from "./form.model";
import { ArticleRest } from "../article.rest.service";
import { Article } from "../article.model";

@Component({
    templateUrl: './edit.component.html'
})

export class EditComponent {

    private isEdit: boolean = false;

    private formSubmitted: boolean = false;

    private formGroup: ArticleFormGroup = new ArticleFormGroup();

    private article: Article;

    constructor(
        private rest: ArticleRest,
        private router: Router,
        private activeRoute: ActivatedRoute
    ) { }

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
