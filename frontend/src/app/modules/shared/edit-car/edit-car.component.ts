import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.scss']
})
export class EditCarComponent implements OnInit {

  public newcarForm: FormGroup = new FormGroup(
    {
      carID: new FormControl(0),
      brand: new FormControl(''),
      model: new FormControl(''),
      price: new FormControl(''),
      year: new FormControl(''),
      vin: new FormControl(''),
      mileage: new FormControl(''),
      color: new FormControl(''),
      fuel: new FormControl(''),
      hp: new FormControl(''),
      cubic_Capacity: new FormControl(''),
      battery_Capacity: new FormControl(''),
      transmission: new FormControl(''),
      type: new FormControl(''),

    }
  );

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private carService: CarsService,
    public dialogRef: MatDialogRef<EditCarComponent>
  ) {
    this.newcarForm.patchValue(this.data.car);
   }

  ngOnInit(): void {
  }

  get carID(): AbstractControl | null{
    return this.newcarForm.get('carID');
  }

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
  get vin(): AbstractControl | null{
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

  get hp(): AbstractControl | null{
    return this.newcarForm.get('HP');
  }
  get cubic_Capacity(): AbstractControl | null{
    return this.newcarForm.get('cubic_capacity');
  }

  get battery_Capacity(): AbstractControl | null{
    return this.newcarForm.get('battery_capacity');
  }

  get transmission(): AbstractControl | null{
    return this.newcarForm.get('transmission');
  }

  get type(): AbstractControl | null{
    return this.newcarForm.get('type');
  }

  public editCar(): void{
    this.carService.editCar(this.newcarForm.value).subscribe(
      (result) => {
        console.log(result);
        this.dialogRef.close(result);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
