import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

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
  selector: 'app-list-filter',
  templateUrl: './list-filter.component.html',
  styleUrls: ['./list-filter.component.scss']
})
export class ListFilterComponent {

  displayedColumns: string[] = [ 'firstName', 'lastName', 'age','location', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
}
