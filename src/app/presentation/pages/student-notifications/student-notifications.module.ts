import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StudentNotificationsPageRoutingModule } from './student-notifications-routing.module';
import { StudentNotificationsPage } from './student-notifications.page';
import { CardModule } from 'primeng/card';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardModule,
    StudentNotificationsPageRoutingModule
  ],
  declarations: [StudentNotificationsPage]
})
export class StudentNotificationsPageModule {}
