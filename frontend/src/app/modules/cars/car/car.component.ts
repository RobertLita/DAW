import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CarsService } from 'src/app/services/cars.service';
import { EditCarComponent } from '../../shared/edit-car/edit-car.component';
import { HistoriesService } from 'src/app/services/histories.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  public history_url: string | undefined;
  public subscription: Subscription | undefined;
  public id: number | undefined;
  public car = {
    carID: 0,
    brand: 'default brand',
    model: 'default model',
    price: 0,
    year: 0,
    mileage: 0,
    color: 'default color',
    fuel: 'default fuel',
    hp: 0,
    cubic_Capacity: 0,
    battery_Capacity: 0,
    transmission: 'default transmission',
    vin: 'default vin',
    type: 'default type',
    ownerID: 0,
    historyID: 0,
    bodykitID: 0,
  }
  constructor(

    private router: Router,
    private route: ActivatedRoute,
    private carService: CarsService,
    public dialog: MatDialog,
    private historyService: HistoriesService,
  ) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => {
      console.log(params);
      this.id = +params['id'];
      if (this.id) {
        this.getCar();
      }
    });
  }

  public openModal(car: any): void {
    const data = {
      car
    };
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    dialogConfig.data = data;
    const dialogRef = this.dialog.open(EditCarComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      (result) => {
      console.log(result);
      window.location.reload();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  public getCar(): void{
    this.carService.getCarById(this.id).subscribe(
      (result) => {
        this.car = result;
        console.log(result);
      }
    );
  }

  public getHistory(id: any): void{
    this.historyService.getHistory(id).subscribe(
      (result) => {
        console.log(result);
        window.location.href = result.carHistory;
      },
      (error) => {
        console.error(error);
      }
    )
  }
}
