import { Component } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { MatTableDataSource} from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AgeRestrictionComponent } from './age-restriction/age-restriction.component';
import { UsersService, User } from 'src/app/services/users.service';

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

  constructor(
    private dialog: MatDialog,
    private usersService:UsersService
    ) {}

  displayedColumns: string[] = [ 'firstName', 'lastName', 'age','location', 'actions'];
  dataSource:any;
  usersList:User[] = [];

  ngOnInit(){
    this.usersService.currentUsers.subscribe(users => this.usersList = users)
    this.dataSource = new MatTableDataSource(this.usersList);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onSubmit(): void {
    let value = this.options.value as User;
    this.usersList.push (value);
    this.usersService.changeUsers(this.usersList)
    this.dataSource = new MatTableDataSource(this.usersList);

    this.options = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      age: new FormControl(0),
      location: new FormControl(''),
    });

  }

  deleteItem(item: User){
    let r = this.usersList.filter(element => element != item);
    this.usersList = r;
    this.usersService.changeUsers(this.usersList)
    this.dataSource = new MatTableDataSource(this.usersList);
  }

  openDialog() {
    const ref: MatDialogRef<AgeRestrictionComponent> = this.dialog.open(
      AgeRestrictionComponent,
      {
        width: '600px',
        backdropClass: 'confirmDialogComponent',
        hasBackdrop: true,
      }
      );
      
      ref.afterClosed().subscribe((data) => {
      });
  }
}
