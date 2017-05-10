import { Component, OnInit, OnDestroy } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { ActivatedRoute } from '@angular/router';
import { SharedDataService  } from '../../shared/shared.service';

@Component({
  selector: 'app-representative-details',
  templateUrl: './representative-details.component.html',
  styleUrls: ['./representative-details.component.scss']
})

export class RepresentativeDetailsComponent implements OnInit {
  representative: string;
  representativeName: string;
  constructor(private SharedDataService:SharedDataService,private PeopleService: PeopleService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.PeopleService.getSpecificRepresentative(this.route.snapshot.params['id'])
      .subscribe(data => {
        this.representative = data;
        this.representativeName = data[0].name;
        this.SharedDataService.setRepresentative(this.representativeName);
      });
      
  }

}
