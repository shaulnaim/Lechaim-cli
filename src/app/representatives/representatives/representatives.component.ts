import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { PeopleService } from '../../services/people.service';
import { HeaderComponent } from '../../header/header.component'
import { SharedDataService } from '../../shared/shared.service';

@Component({
    selector: 'representatives',
    templateUrl: './representatives.component.html',
    styleUrls: ['./representatives.component.scss'],
    inputs: ['users']
})

export class RepresentativesComponent implements OnInit {
    //public hide = false;
    constructor(
        private authenticationService: AuthenticationService,
        private peopleService: PeopleService) { }

    isDetailed = false;
    active = "";
    private representatives;
    private searched;
    private backuprepresentatives;
    private selected;

    ngOnInit() {
        this.authenticationService.checkCredentials();
        this.setRepresentative(null);
        this.peopleService.getRepresentatives()
            .subscribe((data) => {
                this.representatives = data;
                this.backuprepresentatives = this.representatives;
            });
    }
    doLogout() {
        this.authenticationService.doLogout();
    }
    setRepresentative(value) {
        SharedDataService.sharedRepresentative = value;
    }

    onSelect(newVal, el) {
        this.searched = (typeof (this.selected) == 'object') ? this.selected.name : null;
    }
}
