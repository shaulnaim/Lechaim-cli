import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared/shared.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { CandidatesComponent } from '../candidates/candidates.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private candidates:CandidatesComponent) { }
  private representative;
  public hide = false;

  changeRoute(url) {
    this.setRepresentative(null);
    if (url=="/Candidates")
      this.candidates.ngOnInit();
    else {
      this.router.navigate([url]);
    }
  }

  setRepresentative(value) {
    SharedDataService.sharedRepresentative = value;
  }

  doLogout() {
    this.authenticationService.doLogout();
  }

}
