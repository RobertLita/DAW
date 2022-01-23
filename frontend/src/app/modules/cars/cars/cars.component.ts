import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  public cars : Array<{carID: number, brand: string, model: string, price: number, year: number, mileage:number , color: string
  , fuel: string, HP: number, cubic_Capacity: number, battery_Capacity:number, transmission: string, VIN: string, type:string,  
  ownerID:number, historyID:number, bodykitID:number}> = [];
  constructor(
    private carsService: CarsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.carsService.getCars().subscribe(
      (result) => {
        this.cars = result;
        console.log(result);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  public goToCar(id: any): void{
    this.router.navigate(['/car', id]);
  }

  public deleteCar(car : any): void{
    console.log(car);
    this.carsService.deleteCar(car).subscribe(
      (result) =>{
        console.log(result);
        this.cars = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
