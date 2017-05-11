import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { PeopleService } from '../services/people.service';

var USERS = [];

@Injectable()
export class AuthenticationService {
  constructor(
    private router: Router,
    private peopleService: PeopleService) {   
   
 }

  doLogout() {
    localStorage.removeItem("currentUser");
    this.reLogin();
  }

  reLogin() {
    this.router.navigate(['/Login']);
  }

  doLogin(user) {
    this.peopleService.getRepresentatives()
            .subscribe((data) => {
                USERS = data;
            });
    var authenticatedUser = USERS.find(u => u.email === user.email);
    if (authenticatedUser) {
      localStorage.setItem("currentUser", authenticatedUser.email);
      return true;
    }
    return false;
  }

  checkCredentials() {
    if (localStorage.getItem("currentUser") === null) {
      this.reLogin();
    }
  }
}