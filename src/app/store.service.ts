import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, BehaviorSubject, of } from 'rxjs'
import { Techie, TechieArray, TechieNoId } from './types/techies'

// THIS IS NOT A PROPER STORE (Redux)
@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private techiesUrl = 'api/techies'
  private _techies = new BehaviorSubject(<TechieArray>[])
  public readonly techies = this._techies.asObservable()

  constructor(private http: HttpClient,) {
    this.loadTechies()
  }

  loadTechies(): void{
    this.http.get<TechieArray>(this.techiesUrl).subscribe( techies => {
      this._techies.next(techies)
    })
  }

  getTechies(): Observable<TechieArray>{
    return new Observable(fn => this._techies.subscribe(fn))
  }

  // instead of false, we could have an error. We would have
  // an observable, and the error would be propagated to the
  // subscriber (the techie add/modify) which could load an
  // error component to replace the form saying 'could not
  // find technician with id...' also note that here we
  // assume (because we clicked on an item generated from a
  // techie data point) that there are techies in the store.
  // If the user navigates directly here, we could be in
  // trouble...Refactor.
  getTechie(id: string): Techie | false {
    const values = this._techies.getValue()
    for(let i = 0; i < values.length; i++){
      if(values[i].id === id){
        return values[i]
      }
    }
    return false
  }

  addTechie(newTechie: TechieNoId): void{
    const v = this._techies.getValue()
    // of course we can end up with duplicate id
    // for demonstration purposes only
    // can we use the in-memory for that too?
    const id = String(v.length+Math.floor(Math.random()))
    v.push({id, ...newTechie})
    this._techies.next(v)
  }

  modifyTechie(newInformation: Techie): void{
    const v = this._techies.getValue()
    let techieIndex: number | false = false
    for(let i = 0; i < v.length; i++){
      if(v[i].id === newInformation.id){
        techieIndex = i
      }
    }
    if(techieIndex !== false){
      v[techieIndex] = newInformation
      this._techies.next(v)
    }
  }

}
