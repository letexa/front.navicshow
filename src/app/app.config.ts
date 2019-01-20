import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../environments/environment';
import { IAppConfig } from './app.config.model';
@Injectable()
export class AppConfig {
    static settings: IAppConfig;
    constructor(private http: Http) {}
    load() {
        const jsonFile = 'assets/config/config.' + environment.name + '.json';
        return new Promise<void>((resolve, reject) => {
            this.http.get(jsonFile).toPromise().then(response  => {
                AppConfig.settings = response.json();
                resolve();
            }).catch((response: any) => {
                reject('Could not load file ' + jsonFile + ': ' + JSON.stringify(response));
            });
        });
    }
}