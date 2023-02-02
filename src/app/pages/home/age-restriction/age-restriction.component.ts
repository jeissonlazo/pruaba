import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-age-restriction',
  templateUrl: './age-restriction.component.html',
  styleUrls: ['./age-restriction.component.scss']
})
export class AgeRestrictionComponent  {
  age!:number;
  constructor(
    @Inject(MAT_DIALOG_DATA) data: { products:any[] },
    public dialogRef: MatDialogRef<AgeRestrictionComponent>,
    private router: Router,
  ) {}
  
  submit(){
    this.router.navigate(['/list', this.age]);
  }
}
