import { Component } from '@angular/core';
import { StoreService } from './store.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-table-actions';
  constructor(private storeService: StoreService) {}
}
