import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsTeacherPageRoutingModule } from './tabs-routing.module';
import { TabsTeacherPage } from './tabs-teacher.page';
import { ChipModule } from 'primeng/chip';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ChipModule,
    TabsTeacherPageRoutingModule
  ],
  declarations: [TabsTeacherPage]
})
export class TabsTeacherPageModule {}
