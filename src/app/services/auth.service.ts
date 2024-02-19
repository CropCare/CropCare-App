import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  api = environment.apiURL;
  private isAuthenticated: boolean = false;
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post(this.api + 'login', {
      email: email,
      password: password,
    });
  }

  register(
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) {
    return this.http.post(this.api + 'adduser', {
      email: email,
      password: password,
      first_name: firstName,
      last_name: lastName,
    });
  }

  setLoggedIn(value: boolean) {
    this.isAuthenticated = value;
  }
  
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
