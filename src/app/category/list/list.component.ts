import { Component } from '@angular/core';
import { Category } from '../category.model';
import { CategoryRest } from '../category.rest.service';
import { ActivatedRoute, Router } from "@angular/router";
import { Rest } from "../../rest.model";

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
    private isSpinner: boolean = false;

    private showCaterogies: boolean = true;

    constructor(
        private repository: CategoryRest,
        private router: Router,
        private activeRoute: ActivatedRoute
    ) {
        this.limit = this.repository.limit;

        this.pageRendering(activeRoute);

        this.repository.count()
            .toPromise()
            .then((data: Rest) => {
                if (data.code === 200 && data.message) {
                    this.count = Number(data.message);
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

            let isUpdate = false;

            if (params.page && this.page !== params.page) {
                this.page = params.page;
                isUpdate = true;
            } else {
                this.page = this.page ? this.page : 1;
            }

            if (isUpdate || this.page === 1) {
                this.repository.all(this.page)
                    .toPromise()
                    .then((data: Rest) => {
                        if (data.code === 200 && data.message) {
                            this.isSpinner = false;
                            this.showCaterogies = true;
                            this.categories = Object.keys(data.message).map(key => ({
                                id: data.message[key].id,
                                name: data.message[key].name,
                                created: data.message[key].created,
                                updated: data.message[key].updated
                            }));
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
        const categoriesInterval = setInterval(() => {
            timer += 100;
            if (timer >= 1000 && this.categories.length === 0) {
                this.showCaterogies = false;
                this.isSpinner = true;
                clearInterval(categoriesInterval);
                const spinnerInterval = setInterval(() => {
                    timer += 100;
                    if (timer >= 1000 && this.categories.length > 0) {
                        this.isSpinner = false;
                        this.showCaterogies = true;
                        clearInterval(spinnerInterval);
                    }
                }, 100);
            }
        }, 100);
    }
}
