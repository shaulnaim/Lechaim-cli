import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { PeopleService } from '../services/people.service';
import { HeaderComponent } from '../header/header.component';
import { SharedDataService } from '../shared/shared.service';

@Component({
    templateUrl: './candidates.component.html',
    styleUrls: ['./candidates.component.scss'],
    inputs: ['users']
})

export class CandidatesComponent implements OnInit {
    //public hide = false;
    constructor(
        private authenticationService: AuthenticationService,
        private peopleService: PeopleService
    ) {}
    isDetailed = false;
    active = "";
    private searched
    private users;
    private backupusers;
    private selected;
    private representative;
 
    ngOnInit() {
        this.authenticationService.checkCredentials();
        this.representative = this.getRepresentative();
        this.peopleService.getMyData()
        .subscribe((data) => {
            this.users = data;
            this.backupusers = this.users;
        });
    }
    getRepresentative() {
      return SharedDataService.sharedRepresentative;
      
    }
    doLogout() {
        this.authenticationService.doLogout();
    }
    onSelect(newVal, el) {
        this.searched = (typeof (this.selected) == 'object') ? this.selected.name : null;
    }
    deleteCandidate(index,userId){
            this.peopleService.deleteCandidate(userId).subscribe((data) => {
            if(confirm('are you sure?')) {
                this.users.splice(index,1);
            }
        });
    }
}
