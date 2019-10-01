import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from "../category.model";
import { CategoryRest } from "../category.rest.service";
import { CategoryFormGroup } from "./form.model";
import { Rest } from "../../rest.model";

@Component({
    selector: 'edit-app',
    templateUrl: './edit.component.html'
})

export class EditComponent { 

    current: Category;

    currentName: string;

    category: Category;

    formGroup: CategoryFormGroup = new CategoryFormGroup();

    formSubmitted: boolean = false;

    isEdit: boolean = false;

    constructor (
        private rest: CategoryRest, 
        private router: Router, 
        private activeRoute: ActivatedRoute
    ) { 
        activeRoute.params.subscribe(params => {
            if (params.id !== undefined) {
                this.isEdit = true;
                this.rest.get(params.id)
                    .toPromise()
                    .then((data: Rest) => {
                        if (data.code === 200 && data.message) {
                            this.category = data.message;
                            this.formGroup.get('name').setValue(this.category.name);
                        }
                    });
            }
        });
    }

    submitForm(form: NgForm) {
        this.formSubmitted = true;
        if (this.formGroup.valid) {
            this.category = this.category ? this.category : new Category();
            this.category.name = form.value.name;

            if (!this.isEdit) {
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
            }
        }
    }
}