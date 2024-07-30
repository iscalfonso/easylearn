import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs-teacher',
    loadChildren: () => import('./presentation/pages/tabs-teacher/tabs-teacher.module').then(m => m.TabsTeacherPageModule)
  },
  {
    path: 'tabs-student',
    loadChildren: () => import('./presentation/pages/tabs-student-parent/tabs-student-parent.module').then(m => m.TabsStudentParentPageModule)
  },
  {
    path: 'tabs-parent',
    loadChildren: () => import('./presentation/pages/tabs-student-parent/tabs-student-parent.module').then(m => m.TabsStudentParentPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./presentation/pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./presentation/pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'student-list',
    loadChildren: () => import('./presentation/pages/student-list/student-list.module').then( m => m.StudentListPageModule)
  },
  {
    path: 'score-list',
    loadChildren: () => import('./presentation/pages/score-list/score-list.module').then( m => m.ScoreListPageModule)
  },
  {
    path: 'students-report',
    loadChildren: () => import('./presentation/pages/students-report/students-report.module').then( m => m.StudentsReportPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./presentation/pages/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./presentation/pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'student-homeworks',
    loadChildren: () => import('./presentation/pages/student-homeworks/student-homeworks.module').then( m => m.StudentHomeworksPageModule)
  },
  {
    path: 'student-report',
    loadChildren: () => import('./presentation/pages/student-report/student-report.module').then( m => m.StudentReportPageModule)
  },
  {
    path: 'student-notifications',
    loadChildren: () => import('./presentation/pages/student-notifications/student-notifications.module').then( m => m.StudentNotificationsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
