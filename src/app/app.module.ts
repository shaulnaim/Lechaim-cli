import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CandidatesComponent } from './candidates/candidates.component';
import { CreateCandidateComponent } from './create-candidate/create-candidate.component';
import { LoginComponent } from './login/login.component';
import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';
import { AuthenticationService } from './services/authentication.service';
import { PeopleService } from './services/people.service';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { dummyComponent } from './dummy/dummy.component';
import {AuthGuard} from './route-guards/auth.guard';

@NgModule({
  declarations: [
    LoginComponent,
    CandidatesComponent,
    CreateCandidateComponent,
    AppComponent,
    CandidateDetailsComponent,
    SearchFilterPipe,
    dummyComponent
  ],
  imports: [
    RouterModule.forRoot(ROUTES),
    BrowserModule,
    SharedModule
  ],
  exports: [],
  providers: [AuthenticationService,
              PeopleService,
              AuthGuard,
              {
                 provide: 'canDeactivateCreateCandidate',
                 useValue: checkDirtyState
               }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

function checkDirtyState(component:CreateCandidateComponent) {
    if (component.isDirty) 
        return window.confirm ('You have not saved this candidate, Do you really want to leave ?');
    return true;
}
