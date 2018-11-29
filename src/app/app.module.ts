import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Angulartics2Module } from 'angulartics2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReasonsComponent } from './reasons/reasons.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { OrganizersComponent } from './organizers/organizers.component';
import { DocumentsComponent } from './documents/documents.component';
import { PressComponent } from './press/press.component';
import { ConclusionComponent } from './conclusion/conclusion.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReasonsComponent,
    ScheduleComponent,
    OrganizersComponent,
    DocumentsComponent,
    PressComponent,
    ConclusionComponent
  ],
  imports: [
    BrowserModule,

    Angulartics2Module.forRoot(),
    NgbModule.forRoot(),

    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
