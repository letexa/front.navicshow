import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Category } from "../category.model";
import { CategoryRest } from "../category.rest.service";
import { CategoryFormGroup } from "./form.model";

@Component({
    selector: 'edit-app',
    templateUrl: './edit.component.html'
})

export class EditComponent { 

    newCategory: Category = new Category();
    formGroup: CategoryFormGroup = new CategoryFormGroup();
    formSubmitted: boolean = false;

    constructor(private rest: CategoryRest) { }

    submitForm(form: NgForm) {
        this.formSubmitted = true;
        if (this.formGroup.valid) {
            this.newCategory.name = form.value.name;
            this.rest.addCategory(this.newCategory, (res) => {
                console.log(res);
            });
        }
    }
}