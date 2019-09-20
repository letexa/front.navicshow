import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
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
  get(uri: string, data?: object): Observable<any> {

    if (data) {
      for (let key in data) {
        if (this.httpOptions.params.get(key)) {
          this.httpOptions.params = this.httpOptions.params.set(key, data[key]);
        } else {
          this.httpOptions.params = this.httpOptions.params.append(key, data[key]);
        }
      }
    }

    return this.http.get(
        this.apiServer.protocol + '://' + this.apiServer.host + '/' + uri,
        this.httpOptions
      ).pipe(
        catchError(this.handleError)
      );
  }

  put(uri: string, data: object): Observable<any> {
    return this.http.put(
      this.apiServer.protocol + '://' + this.apiServer.host + '/' + uri, 
      data, 
      this.httpOptions
    )
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.message}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };
}
