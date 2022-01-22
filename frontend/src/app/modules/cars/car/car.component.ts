import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  public subscription: Subscription | undefined;
  public id: number | undefined;
  public car = {
    id: 0,
    brand: 'default brand',
    model: 'default model',
    price: 0,
    year: 0,
    mileage: 0,
    color: 'default color',
    fuel: 'default fuel',
    hp: 0,
    cubic_Capacity: 0,
    battery_Capacity: 0,
    transmission: 'default transmission',
    vin: 'default vin',
    type: 'default type',
    ownerID: 0,
    historyID: 0,
    bodykitID: 0,
  }
  constructor(
    private route: ActivatedRoute,
    private carService: CarsService,
  ) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => {
      console.log(params);
      this.id = +params['id'];
      if (this.id) {
        this.getCar();
      }
    });
  }

  public getCar(): void{
    this.carService.getCarById(this.id).subscribe(
      (result) => {
        this.car = result;
        console.log(result);
      }
    );
  }
}
