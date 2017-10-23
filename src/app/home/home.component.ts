import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { ConfigurePiwikTracker, UsePiwikTracker } from 'angular2piwik';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [UsePiwikTracker, ConfigurePiwikTracker],
})
export class HomeComponent implements OnInit, AfterViewInit {
  public liveStreamUrl: SafeResourceUrl;
  public environment = environment;

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
  }

  ngAfterViewInit() {
    if (environment.twitterStreamIsActive) {
      !function(d, s, id) {
        var js: any,
          fjs = d.getElementsByTagName(s)[0],
          p = 'https';
        if (!d.getElementById(id)) {
          js = d.createElement(s);
          js.id = id;
          js.src = p + "://platform.twitter.com/widgets.js";
          fjs.parentNode.insertBefore(js, fjs);
        }
      }
        (document, "script", "twitter-wjs");
    }
  }
}
