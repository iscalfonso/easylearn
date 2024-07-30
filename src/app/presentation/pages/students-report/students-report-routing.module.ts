import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentsReportPage } from './students-report.page';

const routes: Routes = [
  {
    path: '',
    component: StudentsReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentsReportPageRoutingModule {}
