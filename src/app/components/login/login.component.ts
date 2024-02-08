import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  res: string = '';
  username: string = 'Rabie';
  password: string = '1234';
  api = 'http://127.0.0.1:5000/api/login';
  constructor(private http: HttpClient) {}
  login() {
    this.http
      .post(this.api, { username: this.username, password: this.password })
      .subscribe((res: any) => {
        this.res = res.message;
      });
  }
}
