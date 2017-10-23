import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ReasonsComponent } from './reasons/reasons.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { OrganizersComponent } from './organizers/organizers.component';
import { DocumentsComponent } from './documents/documents.component';
import { PressComponent } from './press/press.component';
import { ConclusionComponent } from './conclusion/conclusion.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'neden',
    component: ReasonsComponent,
  },
  {
    path: 'program',
    component: ScheduleComponent,
  },
  {
    path: 'paydaslar',
    component: OrganizersComponent,
  },
  {
    path: 'belgeler',
    component: DocumentsComponent,
  },
  {
    path: 'basindan',
    component: PressComponent,
  },
  {
    path: 'sonuc',
    component: ConclusionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
