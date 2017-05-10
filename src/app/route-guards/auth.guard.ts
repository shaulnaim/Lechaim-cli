import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot,Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
                private router:Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }

        this.router.navigate(['/Login']);
        return false;
 
    }
}