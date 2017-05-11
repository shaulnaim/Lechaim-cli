import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { PeopleService } from './people.service';

@Injectable()
export class DetailsResolver implements Resolve<any> {

  constructor(private peopleservice:PeopleService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.peopleservice.getSpecific(route.params['id']);
  }
  
}