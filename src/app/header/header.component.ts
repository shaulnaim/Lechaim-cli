import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared/shared.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private SharedDataService: SharedDataService,
    private router: Router,
    private authenticationService: AuthenticationService) { }
  private representative;
  public hide = false;
  changeRoute(url) {
    this.resetRepresentative();
    this.router.navigateByUrl('/dummy', { skipLocationChange: true });//for reload page with all list
    setTimeout(() => this.router.navigate([url]));// will not work without this
  }
  resetRepresentative() {
    this.SharedDataService.setRepresentative(null);
  }
  doLogout() {
    this.authenticationService.doLogout();
  }

}
