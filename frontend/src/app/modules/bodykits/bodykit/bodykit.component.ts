import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { EditBodykitComponent } from '../../shared/edit-bodykit/edit-bodykit.component';

import { BodykitsService } from 'src/app/services/bodykits.service';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-bodykit',
  templateUrl: './bodykit.component.html',
  styleUrls: ['./bodykit.component.scss']
})
export class BodykitComponent implements OnInit {

  public subscription: Subscription | undefined;
  public id: number | undefined;
  public bodykit = {
    bodykitID: 0,
    brand: 'default brand',
    carBrand: 'default car brand',
    carModel: 'default car model',
    price: 0,
    carID: 0,
  }

  constructor(
    private route: ActivatedRoute,
    private bodykitService: BodykitsService,
    public dialog: MatDialog,
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

  public openModal(bodykit: any): void {
    const data = {
      bodykit
    };
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    dialogConfig.data = data;
    const dialogRef = this.dialog.open(EditBodykitComponent, dialogConfig);
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


  public getBodykit(): void{
    this.bodykitService.getBodykitById(this.id).subscribe(
      (result) => {
        this.bodykit = result;
        console.log(result);
      }
    );
  }
}
