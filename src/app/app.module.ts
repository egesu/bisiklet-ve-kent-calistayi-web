import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Angular2PiwikModule, UsePiwikTracker, ConfigurePiwikTracker } from 'angular2piwik';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SpinnerComponentModule } from 'ng2-component-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReasonsComponent } from './reasons/reasons.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { OrganizersComponent } from './organizers/organizers.component';
import { DocumentsComponent } from './documents/documents.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReasonsComponent,
    ScheduleComponent,
    OrganizersComponent,
    DocumentsComponent
  ],
  imports: [
    BrowserModule,

    Angular2PiwikModule,
    NgbModule.forRoot(),
    SpinnerComponentModule,

    AppRoutingModule,
  ],
  providers: [
    UsePiwikTracker,
    ConfigurePiwikTracker,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
