import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { user } from '../interfaces/us-interface';
import { AuthResponse } from '../interfaces/res-interface';
import { catchError, map, tap, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl : string = environment.baseUrl;
  private _user! : user;

  get user(){
    return {...this._user}
  }

  constructor(private http: HttpClient) { }

  register(usname : string, id : string, pass: string ) {
    const URL =  `${this.baseUrl}/auth/new`;
    const body = {usname, id, pass};

    return this.http.post<AuthResponse>(URL, body).pipe(
      tap(res => {
        console.log(res)
        if(res.ok){
          localStorage.setItem('token', res.token!);
          this._user = {
            id: res.id!,
            usname: res.usname!
          }
        }
      }),
      map(res => res.ok),
      catchError(err => of(err.error.message))
    );
  }

  login(id: string, pass: string) {
    const URL =  `${this.baseUrl}/auth`;
    const body = {id, pass};

    return this.http.post<AuthResponse>(URL, body).pipe(
      tap(res => {
        console.log(res)
        if(res.ok){
          localStorage.setItem('token', res.token!);
          this._user = {
            id: res.id!,
            usname: res.usname!
          }
        }
      }),
      map(res => res.ok),
      catchError(err => of(err.error.message))
    );
  }

  validateToken() {

  }

}
