import { Component, OnInit } from '@angular/core';

import { ConfigurePiwikTracker, UsePiwikTracker } from 'angular2piwik';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
  providers: [UsePiwikTracker, ConfigurePiwikTracker],
})
export class DocumentsComponent implements OnInit {

  constructor(
    private piwik: UsePiwikTracker,
    private piwikConfigure: ConfigurePiwikTracker
  ) { }

  ngOnInit() {
    if (!environment.production) {
      this.piwikConfigure.setDocumentTitle();
      this.piwik.trackPageView();
    }
  }

}
