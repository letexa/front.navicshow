import { Component } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { Category } from '../category.model';
import { CategoryRest } from '../category.rest.service';

@Component({
    selector: 'list-app',
    templateUrl: './list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ListComponent { 

    constructor(private repository: CategoryRest) { }

    get list() {
        return this.repository.all(categories => {
            return categories;
        });
    } 
}
