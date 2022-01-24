import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BodykitsService } from 'src/app/services/bodykits.service';

@Component({
  selector: 'app-bodykits',
  templateUrl: './bodykits.component.html',
  styleUrls: ['./bodykits.component.scss']
})
export class BodykitsComponent implements OnInit {

  public bodykits : Array<{bodykitID: number, brand: string, carBrand: string, carModel: number, 
    type: string, price: number}> = [];

  constructor(
    private bodykitsService: BodykitsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.bodykitsService.getBodykits().subscribe(
      (result) => {
        this.bodykits = result;
        console.log(result);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  public goToBodykit(id: any): void{
    this.router.navigate(['/bodykit', id]);
  }
  
  public deleteBK(bodykit : any): void{
    console.log(bodykit);
    this.bodykitsService.deleteBK(bodykit).subscribe(
      (result) =>{
        console.log(result);
        this.bodykits = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}


