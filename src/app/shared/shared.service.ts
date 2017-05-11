import { Injectable } from '@angular/core';
import { CreateCandidateComponent } from '../create-candidate/create-candidate.component';

@Injectable()
export class SharedDataService {
    static sharedRepresentative:any;

}

export class DeactivateRouteWhenDirty {
    static checkDirtyState(component: CreateCandidateComponent) {
    if (component.isDirty)
      return window.confirm('You have not saved this candidate, Do you really want to leave ?');
    return true;
  }
}