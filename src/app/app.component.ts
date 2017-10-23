import { Component } from '@angular/core';

import { InitializePiwik } from 'angular2piwik';

import { environment } from '../environments/environment';

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
  public environment = environment;

  constructor(
    private initializePiwik: InitializePiwik
  ) {
    const url = `//piwik.buyutec.xyz/`;
    initializePiwik.init(url, 1);
  }
}
