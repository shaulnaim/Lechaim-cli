import { Component, OnInit, OnDestroy } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { ActivatedRoute } from '@angular/router';
import { SharedDataService } from '../shared/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.scss']
})

export class CandidateDetailsComponent implements OnInit {
  user: any;
  representative:any;

  constructor(private PeopleService: PeopleService,
              private route: ActivatedRoute,
              private router: Router,
              ) {}
              
  setRepresentative (value) {
        SharedDataService.sharedRepresentative = value;
  }
    
  getRepresentative() {
      return SharedDataService.sharedRepresentative;
  }
  ngOnInit() {
    this.representative = this.getRepresentative();
    this.user = this.route.snapshot.data['details']  
  }
  showFullList(){
    this.setRepresentative(null);
    this.router.navigate(['/Candidates']);
  }
  back(){
    this.router.navigate(['/Candidates']);
  }

}
