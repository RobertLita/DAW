import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  public getCarById(id: any): Observable<any> {
    return this.http.get(`${this.url}/byId/${id}`);
  }

  public addCar(car: any): Observable<any> {
    return this.http.post(`${this.url}/withobj`, car);
  }

  public editCar(car: any): Observable<any> {
    return this.http.put(`${this.url}/${car.carID}`, car);
  }

  public deleteCar(car: any): Observable<any>{
    const options = {
      headers: new HttpHeaders(),
      body: car
    };
    return this.http.delete(`${this.url}/${car.carID}`);
  }
}
