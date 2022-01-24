import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { BodykitsService } from 'src/app/services/bodykits.service';

@Component({
  selector: 'app-edit-bodykit',
  templateUrl: './edit-bodykit.component.html',
  styleUrls: ['./edit-bodykit.component.scss']
})
export class EditBodykitComponent implements OnInit {


  public newbodykitForm: FormGroup = new FormGroup(
    {
      bodykitID: new FormControl(0),
      brand: new FormControl(''),
      carBrand: new FormControl(''),
      carModel: new FormControl(''),
      carID: new FormControl(0),
      price: new FormControl(''),
    }
  );

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private bodykitService: BodykitsService,
    public dialogRef: MatDialogRef<EditBodykitComponent>
  ) {
    this.newbodykitForm.patchValue(this.data.bodykit);
   }

  ngOnInit(): void {
  }

  get bodykitID(): AbstractControl | null{
    return this.newbodykitForm.get('bodykitID');
  }

  get brand(): AbstractControl | null{
    return this.newbodykitForm.get('brand');
  }

  get carModel(): AbstractControl | null{
    return this.newbodykitForm.get('carModel');
  }

  get carID(): AbstractControl | null{
    return this.newbodykitForm.get('carID');
  }
  

  get carBrand(): AbstractControl | null{
    return this.newbodykitForm.get('carBrand');
  }
  
  get price(): AbstractControl | null{
    return this.newbodykitForm.get('price');
  }

  public editBK(): void{
    this.bodykitService.editBK(this.newbodykitForm.value).subscribe(
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
