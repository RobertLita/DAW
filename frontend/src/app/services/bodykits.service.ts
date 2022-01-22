import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BodykitsService {

  public url = 'https://localhost:44338/api/bodykit';
  constructor(
    public http: HttpClient,
  ) { }

  public getBodykits(): Observable<any>{
    return this.http.get(`${this.url}`);
  }
}
