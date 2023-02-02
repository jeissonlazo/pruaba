import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListFilterComponent } from './pages/list-filter/list-filter.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list', component: ListFilterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
