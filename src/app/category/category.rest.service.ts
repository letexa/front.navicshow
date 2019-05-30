import { Injectable } from "@angular/core";
import { Category } from "./category.model";
import { RestService } from "../rest.service";

@Injectable()
export class CategoryRest {
    private categories: Category[] = new Array<Category>();

    constructor(private rest: RestService) { }

    all(callback) {
      return this.rest.get('category/list')
        .subscribe((res) => {
          return callback(res);
        });
    }

    addCategory(newCategory: Category, callback) {
      this.rest.put('category/create', { name: newCategory.name })
        .subscribe((res) => {
          callback(res);
        });
    }
}