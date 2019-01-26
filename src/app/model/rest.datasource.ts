import { Injectable } from "@angular/core";
import { Http, Request, RequestMethod } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Article } from "./article.model";
import { AppConfig } from "../app.config";
import "rxjs/add/operator/map";

const PROTOCOL = "http";
const PORT = 3500;

@Injectable()
export class RestDataSource {
    protocol: string;
    baseUrl: string;
    token: string;

    constructor(private http: Http) {
        this.baseUrl = AppConfig.settings.apiServer.host;
        this.protocol = AppConfig.settings.apiServer.protocol;
        this.token = AppConfig.settings.apiServer.token;
    }

    getArticles(): Observable<Article[]> {
        var res = this.http.request(new Request({
            method: RequestMethod.Get,
            url: this.protocol + '://' + this.baseUrl + '/article/list?authorization=' + this.token
        }));
        
        return res.map(response => {
            if (response.ok) {
                return response.json().message;
            } else {
                throw new Error('REST ERROR!');
            }
        });
    }
    
    getArticle(id: number): Observable<Article> {
        var res = this.http.request(new Request({
            method: RequestMethod.Get,
            url: this.protocol + '://' + this.baseUrl + '/article/'+id+'?authorization=' + this.token
        }));
        
        return res.map(response => {
            if (response.ok) {
                return response.json().message;
            } else {
                throw new Error('REST ERROR!');
            }
        });
    }
    
}