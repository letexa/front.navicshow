import { Component } from '@angular/core';
import { Category } from '../category.model';
import { CategoryRest } from '../category.rest.service';

@Component({
    selector: 'list-app',
    templateUrl: './list.component.html'
})

export class ListComponent { 

    private categories: Category[] = [];

    constructor(private repository: CategoryRest) { 
        this.repository.all()
            .toPromise()
            .then((data: any) => {
                if (data.code == 200 && data.message) {
                    this.categories = data.message;
                }
            });;
    }

    get list() {
        return this.categories;
    } 
}
