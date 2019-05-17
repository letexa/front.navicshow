import { Injectable } from "@angular/core";
import { Category } from "./category.model";
import { RestService } from "../rest.service";

@Injectable()
export class CategoryRest {
    private categories: Category[] = new Array<Category>();

    constructor(private rest: RestService) { }

    addCategory(newCategory: Category, callback) {
      this.rest.get()
        .subscribe((res) => {
          callback(res);
        });
    }
}