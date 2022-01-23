import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { RimsService } from 'src/app/services/rims.service';

@Component({
  selector: 'app-rim',
  templateUrl: './rim.component.html',
  styleUrls: ['./rim.component.scss']
})
export class RimComponent implements OnInit {

  public subscription: Subscription | undefined;
  public id: number | undefined;
  public rim = {
    id: 0,
    size: 'default size',
    brand: 'default brand',
    type: 0,
    price: 0,
    et: 0,
    j: 0,
    hubSize: 'default fuel',
  }

  constructor(
    private route: ActivatedRoute,
    private rimService: RimsService,
  ) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => {
      console.log(params);
      this.id = +params['id'];
      if (this.id) {
        this.getRim();
      }
    });
  }

  public getRim(): void{
    this.rimService.getRimById(this.id).subscribe(
      (result) => {
        this.rim = result;
        console.log(result);
      }
    );
  }

}
