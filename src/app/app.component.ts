import { Component } from '@angular/core';

import { InitializePiwik } from 'angular2piwik';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [InitializePiwik],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'app';
  public isNavbarCollapsed = true;
  public spinner = false;

  constructor(
    private initializePiwik: InitializePiwik
  ) {
    const url = `//piwik.buyutec.xyz/`;
    initializePiwik.init(url, 1);
  }
}
