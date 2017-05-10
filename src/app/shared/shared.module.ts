import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { HeaderComponent } from '../header/header.component';
import { ROUTES } from '../app.routes';
import { RouterModule } from '@angular/router';
import { SharedDataService  } from './shared.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        Ng2AutoCompleteModule,
        Angular2FontawesomeModule,
        RouterModule,
    ],
    declarations: [
        HeaderComponent
    ],
    providers: [
        SharedDataService
    ],
    exports: [
        RouterModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        Ng2AutoCompleteModule,
        Angular2FontawesomeModule,
        HeaderComponent
    ]
})
export class SharedModule { }
