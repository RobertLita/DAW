import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoriesService {

  public url = 'https://localhost:44338/api/history';
  constructor(
    public http: HttpClient,
  ) { }

  public getHistory(id: any): Observable<any>{
    return this.http.get(`${this.url}/byId/${id}`);
  }
}
