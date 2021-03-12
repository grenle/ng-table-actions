// we require ViewChild to get a reference to the table
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import {ConfirmDialogComponent} from '../confirm-dialog/confirm-dialog.component'

type Techie = {
  id: string;
  name: string;
  email: string;
}

@Component({
  selector: 'app-techie-table',
  templateUrl: './techie-table.component.html',
  styleUrls: ['./techie-table.component.css']
})
export class TechieTableComponent implements OnInit {

  // Using the Non-null assertion operator (!) here, it is a
  // reference from a template that isn't initialized in the
  // constructor which confuses TypeScript
  @ViewChild('techietable', { static: true }) techietable!: MatTable<any>;

  dialogRef!: MatDialogRef<ConfirmDialogComponent>;

  techies: Techie[] = [
    {id: 'id000', name: 'hiyam', email: 'hiyam@thedo.jo'},
    {id: 'id001', name: 'Tetsuo', email: 'testuo@tropbeau.com'}
  ]

  displayedColumns: string[] = ['name', 'email', 'edit', 'delete']

  constructor(public dialog: MatDialog) {}

  onEditRequest(id: string){
    console.log(`editing techie id: ${id}`)
  }

  onDeleteRequest(id: string){
    this.dialogRef = this.dialog.open(ConfirmDialogComponent, {
      disableClose: false
    })
    this.dialogRef.afterClosed().subscribe(actionIfConfirmed => {
      if(actionIfConfirmed){
        this.deleteTechie(id)
      }
    })
  }

  // We need to find where the techie is in the techie
  // array. In React, we would use an object instead of an
  // array and delete the k/v pair. Can we achieve a similar
  // strategy in Angular?
  deleteTechie(id: string){
    // We could also just loop over and delete if found but
    // here we can abstract the search (and modify it) and
    // deal with failure to find (log the error for
    // diagnostic for example)
    let techieIndex: number | boolean = false
    for(let i = 0; i < this.techies.length; i++){
      if(this.techies[i].id === id){
        techieIndex = i
      }
    }
    // Strict inequality used, otherwise 0 would pass as
    // false, so deleting the first techie would not work.
    if(techieIndex !== false){
      // weird, typescript doesn't complain about the type
      // of techieIndex being union of boolean x number
      this.techies.splice(techieIndex, 1)
      this.techietable.renderRows()
    }
  }

  ngOnInit(): void {
  }

}
