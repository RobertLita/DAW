import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-newrim',
  templateUrl: './newbodykit.component.html',
  styleUrls: ['./newbodykit.component.scss']
})
export class NewBodyKitComponent implements OnInit {

  public newbodykitForm: FormGroup = new FormGroup(
    {
      username: new FormControl(''),
      brand: new FormControl(''),
      car: new FormControl(''),
      type: new FormControl(''),
      price: new FormControl(''),
    }
  );
  router: any;

  constructor() { }

  ngOnInit(): void {
  }

  get username(): AbstractControl | null{
    return this.newbodykitForm.get('username');
  }

  get brand(): AbstractControl | null{
    return this.newbodykitForm.get('brand');
  }

  get car(): AbstractControl | null{
    return this.newbodykitForm.get('car');
  }
  
  get type(): AbstractControl | null{
    return this.newbodykitForm.get(' type');
  }

  get price(): AbstractControl | null{
    return this.newbodykitForm.get(' price');
  }

  public newbodykit(): void{
    //localStorage.setItem('Role', 'Admin');
    this.router.navigate(['/bodykits']);
  }
}
