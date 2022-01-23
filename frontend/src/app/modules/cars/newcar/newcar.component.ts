import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-newcar',
  templateUrl: './newcar.component.html',
  styleUrls: ['./newcar.component.scss']
})
export class NewCarComponent implements OnInit {

  public newcarForm: FormGroup = new FormGroup(
    {
      //carID: new FormControl(0),
      brand: new FormControl(''),
      model: new FormControl(''),
      price: new FormControl(0),
      year: new FormControl(0),
      VIN: new FormControl(''),
      mileage: new FormControl(0),
      color: new FormControl(''),
      fuel: new FormControl(''),
      HP: new FormControl(0),
      cubic_capacity: new FormControl(0),
      battery_capacity: new FormControl(0),
      transmission: new FormControl(''),
      type: new FormControl(''),

    }
  );
  constructor(
    private router: Router,
    private carsService: CarsService
  ) { }

  ngOnInit(): void {
  }
  //getters
  // get carID(): AbstractControl | null{
  //   return this.newcarForm.get('carID');
  // }

  get brand(): AbstractControl | null{
    return this.newcarForm.get('brand');
  }

  get model(): AbstractControl | null{
    return this.newcarForm.get(' model');
  }

  get price(): AbstractControl | null{
    return this.newcarForm.get('price');
  }

  get year(): AbstractControl | null{
    return this.newcarForm.get('year');
  }
  get VIN(): AbstractControl | null{
    return this.newcarForm.get('VIN');
  }

  get mileage(): AbstractControl | null{
    return this.newcarForm.get('mileage');
  }

  get color(): AbstractControl | null{
    return this.newcarForm.get('color');
  }

  get fuel(): AbstractControl | null{
    return this.newcarForm.get('fuel');
  }

  get HP(): AbstractControl | null{
    return this.newcarForm.get('HP');
  }
  get cubic_capacity(): AbstractControl | null{
    return this.newcarForm.get('cubic_capacity');
  }

  get battery_capacity(): AbstractControl | null{
    return this.newcarForm.get('battery_capacity');
  }

  get transmission(): AbstractControl | null{
    return this.newcarForm.get('transmission');
  }

  get type(): AbstractControl | null{
    return this.newcarForm.get('type');
  }


  public addCar(): void{
    console.log(this.newcarForm.value);
    this.carsService.addCar(this.newcarForm.value).subscribe(
      (result) => {
        console.log(result);
        this.router.navigate(['/cars']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
