import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TechieTableComponent} from './techie-table/techie-table.component';

const routes: Routes = [
  { path: 'techies', component: TechieTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
