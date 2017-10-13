import { Component, OnInit } from '@angular/core';

import { ConfigurePiwikTracker, UsePiwikTracker } from 'angular2piwik';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  constructor(
    private piwik: UsePiwikTracker,
    private piwikConfigure: ConfigurePiwikTracker
  ) { }

  ngOnInit() {
    this.piwikConfigure.setDocumentTitle();
    this.piwik.trackPageView();
  }

}
