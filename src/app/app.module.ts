import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { DeactivateRouteWhenDirty  } from './shared/shared.service';
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
import { AuthGuard } from './route-guards/auth.guard';
import { DetailsResolver } from './services/details-resolver.service';

@NgModule({
  declarations: [
    LoginComponent,
    CandidatesComponent,
    CreateCandidateComponent,
    AppComponent,
    CandidateDetailsComponent,
    SearchFilterPipe
  ],
  imports: [
    RouterModule.forRoot(ROUTES),
    BrowserModule,
    SharedModule
  ],
  exports: [],
  providers: [AuthenticationService,
    PeopleService,
    DetailsResolver,
    AuthGuard,
    CandidatesComponent,
    {
      provide: 'canDeactivateCreateCandidate',
      useValue: DeactivateRouteWhenDirty.checkDirtyState
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}



