import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { user } from '../interfaces/us-interface';

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

    
  }

  login(id: string, pass: string) {
    const URL =  `${this.baseUrl}/auth`;
    const body = {id, pass};

    return this.http.post(URL, body);
  }

  validateToken() {

  }

}
