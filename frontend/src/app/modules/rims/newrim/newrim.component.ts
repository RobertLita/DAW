import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { RimsService } from 'src/app/services/rims.service';

@Component({
  selector: 'app-newrim',
  templateUrl: './newrim.component.html',
  styleUrls: ['./newrim.component.scss']
})
export class NewRimComponent implements OnInit {

  public newrimForm: FormGroup = new FormGroup(
    {
      size: new FormControl(''),
      brand: new FormControl(''),
      type: new FormControl(''),
      price: new FormControl(''),
      ET: new FormControl(''),
      J: new FormControl(''),
      hubSize: new FormControl(''),
    }
  );
  

  constructor(
    private router: Router,
    private rimService: RimsService,
  ) { }

  ngOnInit(): void {
  }


  get size(): AbstractControl | null{
    return this.newrimForm.get('size');
  }

  get brand(): AbstractControl | null{
    return this.newrimForm.get('brand');
  }

  get type(): AbstractControl | null{
    return this.newrimForm.get('type');
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

  get hubSize(): AbstractControl | null{
    return this.newrimForm.get('hubSize');
  }

  public addRim(): void{
    console.log(this.newrimForm.value);
    this.rimService.addRim(this.newrimForm.value).subscribe(
      (result) => {
        console.log(result);
        this.router.navigate(['/rims']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
