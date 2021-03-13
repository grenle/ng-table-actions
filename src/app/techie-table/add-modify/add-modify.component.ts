import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'

import { StoreService } from '../../store.service'

import { Techie, TechieNoId } from '../../types/techies'


@Component({
  selector: 'app-add-modify',
  templateUrl: './add-modify.component.html',
  styleUrls: ['./add-modify.component.css']
})
export class AddModifyComponent implements OnInit {

  isTechieNew = false

  /**
   * These values should be blank but these obvious dummy
   * values have diagnostic value
   */
  techieDetails:Techie = {
    id: '',
    name: 'default name',
    email: 'default email'
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private storeService: StoreService,
  ) { }

  ngOnInit(): void {
    const techieId = this.route.snapshot.fragment
    if(!techieId){
      this.isTechieNew = true
    }else{
      const maybeDetails = this.storeService.getTechie(techieId)
      if(maybeDetails){
        // we're sure we have a techie now...But we are
        // still silencing the type system. See the
        // store.service for possible correction
        this.techieDetails = <Techie>this.storeService.getTechie(techieId)
      }
      //else: we have an id but no techie to go with it.
      //Show error and invite user to go back? This is a
      //typical "cannot happen" scenario that happens in
      //prod
    }
  }

  onSubmit(){
    if(this.isTechieNew){
      this.storeService.addTechie(this.techieDetails)
    }else{
      this.storeService.modifyTechie(this.techieDetails)
    }
    this.router.navigate(['/techies'])
  }

}
