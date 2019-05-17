import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AppConfig } from './app.config';

@Injectable()
export class RestService {

  private apiServer;
  private httpOptions;

  constructor(private http: HttpClient) { 
    this.apiServer = AppConfig.settings.apiServer;
    this.httpOptions = {
      params: new HttpParams().set('authorization', this.apiServer.token)
    }
  }
  
  /**
   * Отправление GET запроса в api
   * @param data Объект с параметрами
   */
  get(data?: object) {

    if (data) {
      for (let key in data) {
        this.httpOptions.params = this.httpOptions.params.append(key, data[key]);
      }
    }

    return this.http.get(
      this.apiServer.protocol + '://' + this.apiServer.host,
      this.httpOptions
    );
  }
}
