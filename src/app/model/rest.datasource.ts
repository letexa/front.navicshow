import { Injectable } from "@angular/core";
import { Http, Request, RequestMethod } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Article } from "./article.model";
import "rxjs/add/operator/map";

const PROTOCOL = "http";
const PORT = 3500;

@Injectable()
export class RestDataSource {
    baseUrl: string;

    constructor(private http: Http) {
        this.baseUrl = 'http://api.navicshow.loc';
    }

    getArticles(): Observable<Article[]> {
        var res = this.http.request(new Request({
            method: RequestMethod.Get,
            url: this.baseUrl + '/article/list?authorization=A6V5ElpWSfhWKdk18WoSBvsxKo4yC8sHAm6GlqUKLMoEfHx7ZUjpPlvMsvUtKwZKEUdWUE'
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