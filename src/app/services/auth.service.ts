import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable() 
export class AuthService {

  private _loginUrl = "http://127.0.0.1:8000/auth/login/";
  private _registerUrl = "http://127.0.0.1:8000/auth/signup/"


  constructor(private http: HttpClient) {}

  registerUser(user) {
    return this.http.post(this._registerUrl, user)
  }

  loginUser(user) {
    console.log(user);
    return this.http.post<any>(this._loginUrl, user)
  }
}