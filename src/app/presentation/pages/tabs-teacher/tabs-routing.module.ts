import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsTeacherPage } from './tabs-teacher.page';

const routes: Routes = [
  {
    path: '',
    component: TabsTeacherPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../student-list/student-list.module').then(m => m.StudentListPageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../score-list/score-list.module').then(m => m.ScoreListPageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../students-report/students-report.module').then(m => m.StudentsReportPageModule)
      },
      {
        path: 'tab4',
        loadChildren: () => import('../notifications/notifications.module').then(m => m.NotificationsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs-teacher/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs-teacher/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsTeacherPageRoutingModule {}
