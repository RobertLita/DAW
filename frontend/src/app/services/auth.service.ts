import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public url = 'https://localhost:44338/api/Authentication';
  constructor(
    public http: HttpClient,
  ) { }

  public sign_up(user: any): Observable<any> {
    return this.http.post(`${this.url}/sign-up`, user);
  }

  public login(user: any): Observable<any> {
    return this.http.post(`${this.url}/login`, user);
  }

}