import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentHomeworksPage } from './student-homeworks.page';

const routes: Routes = [
  {
    path: '',
    component: StudentHomeworksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentHomeworksPageRoutingModule {}
