import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BodykitsService } from 'src/app/services/bodykits.service';
@Component({
  selector: 'app-bodykit',
  templateUrl: './bodykit.component.html',
  styleUrls: ['./bodykit.component.scss']
})
export class BodykitComponent implements OnInit {

  public subscription: Subscription | undefined;
  public id: number | undefined;
  public bodykit = {
    id: 0,
    brand: 'default brand',
    carBrand: 'default car brand',
    carModel: 'default car model',
    price: 0,
    carID: 0,
  }

  constructor(
    private route: ActivatedRoute,
    private bodykitService: BodykitsService,
  ) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => {
      console.log(params);
      this.id = +params['id'];
      if (this.id) {
        this.getBodykit();
      }
    });
  }

  public getBodykit(): void{
    this.bodykitService.getBodykitById(this.id).subscribe(
      (result) => {
        this.bodykit = result;
        console.log(result);
      }
    );
  }
}
