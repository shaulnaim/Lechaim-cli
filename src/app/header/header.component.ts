import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SharedDataService } from '../shared/shared.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router,
    private authenticationService: AuthenticationService
  ) { }
  private representative;
  public hide = false;
  @Output() refreshList = new EventEmitter()
  
  changeRoute(url) {
    this.setRepresentative(null);
    if (url == "/Candidates") {
      this.refreshList.emit()
    } else {
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
