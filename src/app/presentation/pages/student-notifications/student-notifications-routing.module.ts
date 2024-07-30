import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentNotificationsPage } from './student-notifications.page';

const routes: Routes = [
  {
    path: '',
    component: StudentNotificationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentNotificationsPageRoutingModule {}
