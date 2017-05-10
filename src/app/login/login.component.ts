import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../model/user';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'login-form',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent {
    public isError = false;
    public user = new User('', '');
    public errorMsg = '';

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService) { }

    doLogin() {
        if (!this.authenticationService.doLogin(this.user)) {
            this.isError = true;
            this.errorMsg = 'פרטי כניסה שגויים';
        }
        else {
            this.isError = false;
            this.router.navigate(['/Candidates']);
        }
    }
    doSignup() {
        this.router.navigate(['/representative/RepresentativeSignup']);
    }
}
