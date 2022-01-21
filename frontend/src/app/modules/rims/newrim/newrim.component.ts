import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-newrim',
  templateUrl: './newrim.component.html',
  styleUrls: ['./newrim.component.scss']
})
export class NewRimComponent implements OnInit {

  public newrimForm: FormGroup = new FormGroup(
    {
      username: new FormControl(''),
      size: new FormControl(''),
      type: new FormControl(''),
      price: new FormControl(''),
      ET: new FormControl(''),
      J: new FormControl(''),
      hub_size: new FormControl(''),
    }
  );
  router: any;

  constructor() { }

  ngOnInit(): void {
  }

  get username(): AbstractControl | null{
    return this.newrimForm.get('username');
  }

  get size(): AbstractControl | null{
    return this.newrimForm.get('size');
  }

  get type(): AbstractControl | null{
    return this.newrimForm.get(' type');
  }

  get price(): AbstractControl | null{
    return this.newrimForm.get('price');
  }

  get ET(): AbstractControl | null{
    return this.newrimForm.get('ET');
  }

  get J(): AbstractControl | null{
    return this.newrimForm.get('J');
  }

  get hub_size(): AbstractControl | null{
    return this.newrimForm.get('hub_size');
  }

  public newrim(): void{
    //localStorage.setItem('Role', 'Admin');
    this.router.navigate(['/rims']);
  }
}
