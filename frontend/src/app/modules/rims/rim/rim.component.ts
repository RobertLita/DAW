import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { EditRimComponent } from '../../shared/edit-rim/edit-rim.component';
import { RimsService } from 'src/app/services/rims.service';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
    hubSize: 'default hubsize',
  }

  constructor(
    private route: ActivatedRoute,
    private rimService: RimsService,
    public dialog: MatDialog,
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

  public openModal(rim: any): void {
    const data = {
      rim
    };
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    dialogConfig.data = data;
    const dialogRef = this.dialog.open(EditRimComponent, dialogConfig);
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

}
