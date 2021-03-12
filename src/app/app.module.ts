import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import {MatButtonModule} from '@angular/material/button'
import { MatTableModule } from '@angular/material/table'
import {MatDialogModule} from '@angular/material/dialog'

import { TechieTableComponent } from './techie-table/techie-table.component'
import { AddModifyComponent } from './techie-table/add-modify/add-modify.component'
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component'

@NgModule({
  declarations: [
    AppComponent,
    TechieTableComponent,
    AddModifyComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmDialogComponent]
})
export class AppModule { }
