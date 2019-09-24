import { Component } from '@angular/core';
import { Category } from '../category.model';
import { CategoryRest } from '../category.rest.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'list-app',
    templateUrl: './list.component.html'
})

export class ListComponent { 

    private categories: Category[] = [];

    /**
     * Номер текущей страницы
     */
    private page: number;

    /**
     * Всего категорий
     */
    private count: number;

    /**
     * Количество записей на странице
     */
    private limit: number;

    /**
     * Надо ли выводить спиннер
     */
    private is_spinner: boolean = false;

    private show_caterogies: boolean = true;

    constructor(
        private repository: CategoryRest, 
        private router: Router, 
        private activeRoute: ActivatedRoute
    ) {
        this.limit = this.repository.limit;

        this.pageRendering(activeRoute);

        this.repository.count()
            .toPromise()
            .then((data: any) => {
                if (data.code == 200 && data.message) {
                    this.count = data.message;
                }
            });

        router.events.subscribe((event) => {
            this.pageRendering(activeRoute);
        });
    }

    get list() {
        return this.categories;
    }

    /**
     * Запрос списка категорий в зависимости от текущей страницы
     * @param activeRoute ActivatedRoute
     */
    private pageRendering(activeRoute: ActivatedRoute) {

        this.showSpinner();

        activeRoute.params.subscribe(params => {

            let is_update = false;

            if (params['page'] && this.page != params['page']) {
                this.page = params['page'];
                is_update = true;
            } else {
                this.page = this.page ? this.page : 1;
            }

            if (is_update || this.page == 1) {
                this.repository.all(this.page)
                    .toPromise()
                    .then((data: any) => {
                        if (data.code == 200 && data.message) {
                            this.is_spinner = false;
                            this.show_caterogies = true;
                            this.categories = data.message;
                        }
                    });
            }
        });
    }

    /**
     * Показывает спиннер загрузки. 
     * Выводится, если категорий нет больше одной секунды.
     * Спиннер показывать не меньше секунды, чтобы не было мимолетного показа
     * и дерганий страницы.
     * 
     */
    private showSpinner() {
        let timer = 0;
        let categories_interval = setInterval(() => {
            timer += 100;
            if (timer >= 1000 && this.categories.length == 0) {
                this.show_caterogies = false;
                this.is_spinner = true;
                clearInterval(categories_interval);
                let spinner_interval = setInterval(() => {
                    timer += 100;
                    if (timer >= 1000 && this.categories.length > 0) {
                        this.is_spinner = false;
                        this.show_caterogies = true;
                        clearInterval(spinner_interval);
                    }
                }, 100);
            }
        }, 100);
    }
}
