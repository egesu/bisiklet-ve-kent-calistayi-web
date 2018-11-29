import { Component } from '@angular/core';

import { Angulartics2Piwik } from 'angulartics2/piwik';

import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'app';
  public isNavbarCollapsed = true;
  public environment = environment;

  constructor(
    private piwik: Angulartics2Piwik
  ) {
    const url = `//piwik.buyutec.xyz/`;
    piwik.startTracking();
  }
}
