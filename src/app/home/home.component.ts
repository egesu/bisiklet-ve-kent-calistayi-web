import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { ConfigurePiwikTracker, UsePiwikTracker } from 'angular2piwik';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [UsePiwikTracker, ConfigurePiwikTracker],
})
export class HomeComponent implements OnInit {
  public liveStreamUrl: SafeResourceUrl;

  constructor(
    private piwik: UsePiwikTracker,
    private piwikConfigure: ConfigurePiwikTracker,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    if (!environment.production) {
      this.piwikConfigure.setDocumentTitle();
      this.piwik.trackPageView();
    }

    if (environment.liveStream) {
      this.liveStreamUrl = this.sanitizer.bypassSecurityTrustResourceUrl(environment.liveStream);
    }
  }

}
