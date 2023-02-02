import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AgeRestrictionComponent } from './age-restriction/age-restriction.component';
export interface Element {
  firstName: string;
  age: number;
  lastName: string;
  location: string;
}

let ELEMENT_DATA: Element[] = [
  {age: 1,firstName: 'Hugo', lastName: 'Andrade', location: 'Latam'},
  {age: 2,firstName: 'Martín', lastName: 'Benítez', location: 'Asia'},
  {age: 3,firstName: 'Lucas', lastName: 'Castillo', location: 'Europa'},
  {age: 4,firstName: 'Mateo', lastName: 'Castro', location: 'Latam'},
  {age: 5,firstName: 'Leo', lastName: 'Contreras', location: 'Asia'},
  {age: 6,firstName: 'Daniel ', lastName: 'De León', location: 'USA'},
  {age: 7,firstName: 'Alejandro ', lastName: 'Díaz', location: 'Latam'},
  {age: 8,firstName: 'Pablo ', lastName: 'Duarte', location: 'Europa'},
  {age: 9,firstName: 'Manuel', lastName: 'Espinoza', location: 'USA'},
  {age: 10,firstName: 'Álvaro ', lastName: 'Fernández', location: 'Latam'},
 ];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  options = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    age: new FormControl(0),
    location: new FormControl(''),
  });

  constructor(private dialog: MatDialog) {}

  displayedColumns: string[] = [ 'firstName', 'lastName', 'age','location', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onSubmit(): void {
    let value = this.options.value as Element;
    ELEMENT_DATA.push(value)
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  deleteItem(item: Element){
    let r = ELEMENT_DATA.filter(element => element != item);
    ELEMENT_DATA = r;
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  openDialog() {
    const ref: MatDialogRef<AgeRestrictionComponent> = this.dialog.open(
      AgeRestrictionComponent,
      {
        width: '900px',
        height: '650px',
        backdropClass: 'confirmDialogComponent',
        hasBackdrop: true,
      }
      );
      
      ref.afterClosed().subscribe((data) => {
      });
  }
}
