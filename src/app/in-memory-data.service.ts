import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { TechieArray } from './types/techies'

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    const techies: TechieArray = [
      {id: 'id000', name: 'hiyam', email: 'hiyam@thedo.jo'},
      {id: 'id001', name: 'Tetsuo', email: 'testuo@tropbeau.com'}
    ]
    return {techies}
  }

  constructor() { }
}
