import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatIconModule} from '@angular/material/icon';
import { MatSelectModule} from '@angular/material/select';
import { MatRadioModule} from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule} from '@angular/material/input';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatButtonModule} from '@angular/material/button';
import { MatTableModule} from '@angular/material/table';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';

import { HomeComponent } from './pages/home/home.component';
import { ListFilterComponent } from './pages/list-filter/list-filter.component';
import { AgeRestrictionComponent } from './pages/home/age-restriction/age-restriction.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListFilterComponent,
    AgeRestrictionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule, 
    MatButtonModule,
    MatTableModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
