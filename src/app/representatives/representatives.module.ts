import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RepresentativeSignupComponent } from './representative-signup/representative-signup.component';
import { RepresentativesComponent } from './representatives/representatives.component';
import { RepresentativeDetailsComponent } from './representative-details/representative-details.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import {SharedModule } from '../shared/shared.module';
import {representativesRoutes} from './representatives.routes';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(representativesRoutes),
        SharedModule
    ],
    exports: [],
    declarations: [
        RepresentativesComponent,
        RepresentativeDetailsComponent,
        RepresentativeSignupComponent
    ],
    providers: [],
})
export class representatives { }
