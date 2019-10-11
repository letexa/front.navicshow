import { Injectable } from "@angular/core";
import { Article } from "./article.model";
import { RestService } from "../rest.service";
import { Observable } from 'rxjs';
import { AppConfig } from '../app.config';
import { Rest } from "../rest.model";

@Injectable()
export class ArticleRest {

    public limit: number;

    private config: any;

    constructor(private rest: RestService) {
      //this.config = AppConfig.settings.category;
      //this.limit = this.config.limit;
    }

    
}