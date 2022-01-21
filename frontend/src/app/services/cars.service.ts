import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  public url = 'https://localhost:44338/api/car';
  constructor(
    public http: HttpClient,
  ) { }

  public getCars(): Observable<any>{
    return this.http.get(`${this.url}`);
  }
}