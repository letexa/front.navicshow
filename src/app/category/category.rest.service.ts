import { Injectable } from "@angular/core";
import { Category } from "./category.model";
import { RestService } from "../rest.service";
import { Observable } from 'rxjs';

@Injectable()
export class CategoryRest {

    constructor(private rest: RestService) { }

    all(page: number): Observable<any> {
      let params = {
        'limit': 3,
        'offset': page
      };
      return this.rest.get('category/list', params);
    }

    addCategory(newCategory: Category, callback) {
      this.rest.put('category/create', { name: newCategory.name })
        .subscribe((res) => { 
          callback(res);
        });
    }
}