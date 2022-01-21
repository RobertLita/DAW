import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  public images = ['./assets/cars.jpg','./assets/cars.jpg','./assets/cars.jpg'];
  constructor() { }

  ngOnInit(): void {
  }

}
