import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { UsersService, User } from 'src/app/services/users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-filter',
  templateUrl: './list-filter.component.html',
  styleUrls: ['./list-filter.component.scss']
})
export class ListFilterComponent implements OnInit {

  displayedColumns: string[] = [ 'firstName', 'lastName', 'age','location'];
  dataSourcePass:any;
  dataSourceNoPass:any;
  usersList:User[] = [];
  age!:any;
    
  constructor(
    private _Activatedroute:ActivatedRoute,
    private usersService:UsersService,
    private router: Router
    ){

  }

  ngOnInit (){
    this._Activatedroute.paramMap.subscribe(paramMap => { 
      this.age = paramMap.get('age'); 
      this.usersService.currentUsers.subscribe(users => this.usersList = users)
      this.filter();
    });
  }

  filter(){
    let pass = this.usersList.filter(element => element.age  >= this.age)
    let noPass = this.usersList.filter(element => element.age < this.age)
    this.dataSourcePass = new MatTableDataSource(pass);
    this.dataSourceNoPass = new MatTableDataSource(noPass);
  }

  back(): void {
    this.router.navigate([".."]);
  }
}
