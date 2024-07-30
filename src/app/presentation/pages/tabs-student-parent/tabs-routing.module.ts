import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsStudentParentPage } from './tabs-student-parent.page';

const routes: Routes = [
  {
    path: '',
    component: TabsStudentParentPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../student-homeworks/student-homeworks.module').then(m => m.StudentHomeworksPageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../student-report/student-report.module').then(m => m.StudentReportPageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../student-notifications/student-notifications.module').then(m => m.StudentNotificationsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs-student/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs-student/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsStudentParentPageRoutingModule {}
