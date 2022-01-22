import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RimsService {

  public url = 'https://localhost:44338/api/rim';
  constructor(
    public http: HttpClient,
  ) { }

  public getRims(): Observable<any>{
    return this.http.get(`${this.url}`);
  }
}