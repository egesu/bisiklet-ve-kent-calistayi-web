import { Component, OnInit } from '@angular/core';

import { ConfigurePiwikTracker, UsePiwikTracker } from 'angular2piwik';

@Component({
  selector: 'app-organizers',
  templateUrl: './organizers.component.html',
  styleUrls: ['./organizers.component.scss']
})
export class OrganizersComponent implements OnInit {

  constructor(
    private piwik: UsePiwikTracker,
    private piwikConfigure: ConfigurePiwikTracker
  ) { }

  ngOnInit() {
    this.piwikConfigure.setDocumentTitle();
    this.piwik.trackPageView();
  }

}
