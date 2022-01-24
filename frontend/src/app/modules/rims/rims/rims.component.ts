import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RimsService } from 'src/app/services/rims.service';

@Component({
  selector: 'app-rims',
  templateUrl: './rims.component.html',
  styleUrls: ['./rims.component.scss']
})
export class RimsComponent implements OnInit {

  public rims : Array<{rimID: number, size: number, brand: string, type: string, price: number, et: number, j:number ,
     hubSize: string}> = [];

  constructor(
    private rimsService: RimsService, 
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.rimsService.getRims().subscribe(
      (result) => {
        this.rims = result;
        console.log(result);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  public goToRim(id: any): void{
    this.router.navigate(['/rim', id]);
  }

  public deleteRim(rim : any): void{
    console.log(rim);
    this.rimsService.deleteRim(rim).subscribe(
      (result) =>{
        console.log(result);
        this.rims = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
