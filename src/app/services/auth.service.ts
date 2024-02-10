import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  api = environment.apiURL;
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      this.http
        .post(this.api + 'login', { username: username, password: password })
        .subscribe(
          (res: any) => {
            observer.next(res.success);
            observer.complete();
          },
          (error) => {
            observer.next(false);
            observer.complete();
          }
        );
    });
  }
}
