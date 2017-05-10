import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { Router } from '@angular/router';


@Component({
    selector: 'create-candidate',
    templateUrl: 'create-candidate.component.html',
    styleUrls: ['./create-candidate.component.scss']
})

export class CreateCandidateComponent implements OnInit {
    private isSuccess = false;
    private isError = false;
    private birthdate: number;
    isDirty:boolean = true
    constructor(private peopleService: PeopleService,
        private router: Router) { }

    ngOnInit() { }

    saveCandidate(formValues) {
        this.isDirty = false;
        this.birthdate = this.calculateAge(formValues.date);
        formValues.age = this.birthdate
        console.log(formValues);
        this.peopleService.addCandidate(formValues).subscribe(
            data => {
                this.isSuccess = true;
                window.setTimeout(() => this.router.navigate(['/Candidates']), 2000);
            },
            (err) => {
                this.isError = true;
                console.log(err)
            }
        );
    }
    cancel() {
        this.router.navigate(['/Candidates']);
    }
    calculateAge(dateString) { 
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }


}