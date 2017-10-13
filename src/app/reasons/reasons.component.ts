import { Component, OnInit } from '@angular/core';

import { ConfigurePiwikTracker, UsePiwikTracker } from 'angular2piwik';

@Component({
  selector: 'app-reasons',
  templateUrl: './reasons.component.html',
  styleUrls: ['./reasons.component.scss']
})
export class ReasonsComponent implements OnInit {

  constructor(
    private piwik: UsePiwikTracker,
    private piwikConfigure: ConfigurePiwikTracker
  ) { }

  ngOnInit() {
    this.piwikConfigure.setDocumentTitle();
    this.piwik.trackPageView();
  }

}
