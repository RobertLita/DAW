import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { RimsService } from 'src/app/services/rims.service';
@Component({
  selector: 'app-edit-rim',
  templateUrl: './edit-rim.component.html',
  styleUrls: ['./edit-rim.component.scss']
})
export class EditRimComponent implements OnInit {

  public newrimForm: FormGroup = new FormGroup(
    {
      rimID: new FormControl(''),
      size: new FormControl(''),
      brand: new FormControl(''),
      type: new FormControl(''),
      price: new FormControl(''),
      et: new FormControl(''),
      j: new FormControl(''),
      hubSize: new FormControl(''),
    }
  );

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private rimService: RimsService,
    public dialogRef: MatDialogRef<EditRimComponent>
  ) {
    this.newrimForm.patchValue(this.data.rim);
   }

  ngOnInit(): void {
  }

  get size(): AbstractControl | null{
    return this.newrimForm.get('size');
  }

  get rimID(): AbstractControl | null{
    return this.newrimForm.get('rimID');
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

  get et(): AbstractControl | null{
    return this.newrimForm.get('ET');
  }

  get j(): AbstractControl | null{
    return this.newrimForm.get('J');
  }

  get hubSize(): AbstractControl | null{
    return this.newrimForm.get('hubSize');
  } 

  public editRim(): void{
    this.rimService.editRim(this.newrimForm.value).subscribe(
      (result) => {
        console.log(result);
        this.dialogRef.close(result);
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
