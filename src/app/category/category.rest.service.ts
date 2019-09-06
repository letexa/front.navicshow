import { Injectable } from "@angular/core";
import { Category } from "./category.model";
import { RestService } from "../rest.service";
import { Observable } from 'rxjs';
import { AppConfig } from '../app.config';

@Injectable()
export class CategoryRest {

    private config;

    constructor(private rest: RestService) { 
      this.config = AppConfig.settings.category;
    }

    /**
     * Все категории
     * 
     * @param page Номер страницы
     */
    all(page: number): Observable<any> {
      let params = {
        'limit': this.config.limit,
        'offset': page
      };
      return this.rest.get('category/list', params);
    }
    
    count() {
      return this.rest.get('category/count');
    }

    /**
     * Добавление категории
     * 
     * @param newCategory ./category.model
     * @param callback 
     */
    addCategory(newCategory: Category, callback) {
      this.rest.put('category/create', { name: newCategory.name })
        .subscribe((res) => { 
          callback(res);
        });
    }
}