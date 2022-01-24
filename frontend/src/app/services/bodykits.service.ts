import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  public getBodykitById(id: any): Observable<any> {
    return this.http.get(`${this.url}/byId/${id}`);
  }

  public addBK(bodykit: any): Observable<any> {
    return this.http.post(`${this.url}/withobj`, bodykit);
  }

  public editBK(bodykit: any): Observable<any> {
    return this.http.put(`${this.url}/${bodykit.bodykitID}`, bodykit);
  }

  public deleteBK(bodykit: any): Observable<any>{
    const options = {
      headers: new HttpHeaders(),
      body: bodykit
    };
    return this.http.delete(`${this.url}/${bodykit.bodykitID}`);
  }
}
