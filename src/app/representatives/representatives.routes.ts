import { RepresentativeSignupComponent } from './representative-signup/representative-signup.component';
import { RepresentativesComponent } from './representatives/representatives.component';
import { RepresentativeDetailsComponent } from './representative-details/representative-details.component';
import { Routes } from '@angular/router';

export const representativesRoutes:Routes = [
    { path: 'RepresentativeSignup',
      component: RepresentativeSignupComponent },
    { path: 'Representatives',
      component: RepresentativesComponent },
    { path: 'Representatives/:id',
      component: RepresentativeDetailsComponent }
];
