import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import {TechieTableComponent} from './techie-table/techie-table.component'
import { AddModifyComponent } from './techie-table/add-modify/add-modify.component'

const routes: Routes = [
  { path: 'techies', component: TechieTableComponent },
  { path: 'techies/addmodify', component: AddModifyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
