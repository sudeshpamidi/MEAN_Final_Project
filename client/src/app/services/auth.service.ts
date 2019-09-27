import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, Subject, of} from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  private _isAuth: boolean = false;
  private _isAdmin: boolean = false;

  get isAuth(): boolean {
      return this._isAuth;
  }
  set isAuth(value: boolean) {
      this._isAuth = value;
  }

  get isAdmin(): boolean {
      return this._isAdmin;
  } 
  set isAdmin(value: boolean) {
    this._isAdmin = value;
  }

  private url: string = 'http://localhost:3000/users/login/';
	private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http : HttpClient) { }    
  authenticate(username: string , password : string): Observable<any> {

    return this.http.post(this.url, {username : username, password : password } , this.httpOptions)
            .pipe(map(res => <any>res));    
  }

}
