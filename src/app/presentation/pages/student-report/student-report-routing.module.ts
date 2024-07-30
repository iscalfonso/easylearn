import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentReportPage } from './student-report.page';

const routes: Routes = [
  {
    path: '',
    component: StudentReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentReportPageRoutingModule {}
