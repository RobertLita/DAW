import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  public getRimById(id: any): Observable<any> {
    return this.http.get(`${this.url}/byId/${id}`);
  }

  public addRim(rim: any): Observable<any> {
    return this.http.post(`${this.url}/withobj`, rim);
  }

  public editRim(rim: any): Observable<any> {
    return this.http.put(`${this.url}/${rim.rimID}`, rim);
  }

  public deleteRim(rim: any): Observable<any>{
    const options = {
      headers: new HttpHeaders(),
      body: rim
    };
    return this.http.delete(`${this.url}/${rim.rimID}`);
  }
}