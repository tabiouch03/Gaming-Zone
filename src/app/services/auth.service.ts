import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable() 
export class AuthService {

  private _loginUrl = "http://127.0.0.1:8000/auth/login/";
  private _registerUrl = "http://127.0.0.1:8000/auth/signup/"


  constructor(private http: HttpClient,
              private router: Router) {}

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)

  }

  logged() {
    return !!localStorage.getItem('token')
    this.router.navigate(['/games'])
  }

  logoutUser() {
    localStorage.removeItem('token')
  }
  
}