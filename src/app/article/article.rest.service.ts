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

    constructor(private rest: RestService) {}

    public getUploadsUrl(): string {
      return this.rest.apiServer.protocol +
        '://' +
        this.rest.apiServer.host +
        '/file/upload?authorization=' +
        this.rest.apiServer.token;
    }
}