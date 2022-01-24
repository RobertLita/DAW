import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { BodykitsService } from 'src/app/services/bodykits.service';

@Component({
  selector: 'app-newrim',
  templateUrl: './newbodykit.component.html',
  styleUrls: ['./newbodykit.component.scss']
})
export class NewBodyKitComponent implements OnInit {

  public newbodykitForm: FormGroup = new FormGroup(
    {
      brand: new FormControl(''),
      carBrand: new FormControl(''),
      carModel: new FormControl(''),
      price: new FormControl(''),
      carID: new FormControl(''),
    }
  );
  constructor(
    private router: Router,
    private bodykitService: BodykitsService
  ) { }

  ngOnInit(): void {
  }

  get carID(): AbstractControl | null{
    return this.newbodykitForm.get('carID');
  }

  get brand(): AbstractControl | null{
    return this.newbodykitForm.get('brand');
  }

  get carBrand(): AbstractControl | null{
    return this.newbodykitForm.get('carBrand');
  }
  
  get carModel(): AbstractControl | null{
    return this.newbodykitForm.get('carModel');
  }

  get price(): AbstractControl | null{
    return this.newbodykitForm.get('price');
  }

  public addBK(): void{
    console.log(this.newbodykitForm.value);
    this.bodykitService.addBK(this.newbodykitForm.value).subscribe(
      (result) => {
        console.log(result);
        this.router.navigate(['/bodykits']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
