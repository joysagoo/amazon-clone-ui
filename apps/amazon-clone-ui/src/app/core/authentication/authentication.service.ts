import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { LoginRequest, LoginResponse } from './models/login-details';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private tokenKey: string;

  constructor(private http: HttpClient) {
    this.tokenKey = '';
   }

  login(user: LoginRequest): Observable<LoginResponse> {  
    const loginPayload = user
    const loginUrl = '/auth/login'
    
    return this.http.post<LoginResponse>(loginUrl, loginPayload).pipe(
      map((res) => {
        this.storeJwtToken(res.jwt);
        return res;
      })
    )
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

  storeJwtToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  isUserLoggedIn(): boolean {
    return localStorage.getItem(this.tokenKey) ? true : false;
  }
}
