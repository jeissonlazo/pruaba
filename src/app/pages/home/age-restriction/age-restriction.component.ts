import { Component,Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-age-restriction',
  templateUrl: './age-restriction.component.html',
  styleUrls: ['./age-restriction.component.scss']
})
export class AgeRestrictionComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) data: { products:any[] },
    public dialogRef: MatDialogRef<AgeRestrictionComponent>,
  ) {}
}
