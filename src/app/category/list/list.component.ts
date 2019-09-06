import { Component } from '@angular/core';
import { Category } from '../category.model';
import { CategoryRest } from '../category.rest.service';
import { ActivatedRoute } from "@angular/router";
import {Subscription} from 'rxjs';

@Component({
    selector: 'list-app',
    templateUrl: './list.component.html'
})

export class ListComponent { 

    private categories: Category[] = [];

    private subscription: Subscription;

    /**
     * Номер текущей страницы
     */
    private page: number;

    /**
     * Всего категорий
     */
    private count: number;

    constructor(private repository: CategoryRest, activeRoute: ActivatedRoute,) {
        this.subscription = activeRoute.params.subscribe(params => {
            this.page = params['page'] ? params['page'] : 1;
        });
        
        this.repository.all(this.page)
            .toPromise()
            .then((data: any) => {
                if (data.code == 200 && data.message) {
                    this.categories = data.message;
                }
            });

        this.repository.count()
        .toPromise()
        .then((data: any) => {
            if (data.code == 200 && data.message) {
                this.count = data.message;
            }
        });
    }

    get list() {
        return this.categories;
    } 
}
