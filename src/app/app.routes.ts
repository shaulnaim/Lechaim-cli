import { LoginComponent } from './login/login.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';
import { CreateCandidateComponent } from './create-candidate/create-candidate.component';
import { Routes } from '@angular/router';
import { dummyComponent } from './dummy/dummy.component';
import { AuthGuard } from './route-guards/auth.guard';

export const ROUTES: Routes = [
    { path: 'Candidates',
      component: CandidatesComponent },
    { path: 'Candidates/:id',
      component: CandidateDetailsComponent,
      canActivate:[AuthGuard]},
    { path: 'CreateCandidate',
      component: CreateCandidateComponent,
      canActivate:[AuthGuard],
      canDeactivate: ['canDeactivateCreateCandidate'] },
    { path: 'Login',
      component: LoginComponent },
    { path: 'representative',
      loadChildren: './representatives/representatives.module#representatives' },
    { path: '',
      redirectTo: '/Login',
      pathMatch: 'full' },
    { path: 'dummy',
      component: dummyComponent },
    { path: '**',
      redirectTo: 'Candidates' }
];
