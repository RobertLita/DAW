import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-newcar',
  templateUrl: './newcar.component.html',
  styleUrls: ['./newcar.component.scss']
})
export class NewCarComponent implements OnInit {

  public newcarForm: FormGroup = new FormGroup(
    {
      username: new FormControl(''),
      brand: new FormControl(''),
      model: new FormControl(''),
      price: new FormControl(''),
      year: new FormControl(''),
      VIN: new FormControl(''),
      mileage: new FormControl(''),
      color: new FormControl(''),
      fuel: new FormControl(''),
      HP: new FormControl(''),
      cubic_capacity: new FormControl(''),
      battery_capacity: new FormControl(''),
      transmission: new FormControl(''),
      type: new FormControl(''),
    }
  );
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  //getters
  get username(): AbstractControl | null{
    return this.newcarForm.get('username');
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
  get VIN(): AbstractControl | null{
    return this.newcarForm.get('VIN');
  }

  get mileage(): AbstractControl | null{
    return this.newcarForm.get('mileage');
  }

  get color(): AbstractControl | null{
    return this.newcarForm.get(' color');
  }

  get fuel(): AbstractControl | null{
    return this.newcarForm.get('fuel');
  }

  get HP(): AbstractControl | null{
    return this.newcarForm.get('HP');
  }
  get cubic_capacity(): AbstractControl | null{
    return this.newcarForm.get('VIN');
  }

  get battery_capacity(): AbstractControl | null{
    return this.newcarForm.get('mileage');
  }

  get transmission(): AbstractControl | null{
    return this.newcarForm.get(' color');
  }

  get type(): AbstractControl | null{
    return this.newcarForm.get('fuel');
  }


  public newcar(): void{
    //localStorage.setItem('Role', 'Admin');
    this.router.navigate(['/cars']);
  }
}
