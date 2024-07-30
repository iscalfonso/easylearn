import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsStudentParentPageRoutingModule } from './tabs-routing.module';
import { TabsStudentParentPage } from './tabs-student-parent.page';
import { ChipModule } from 'primeng/chip';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ChipModule,
    TabsStudentParentPageRoutingModule
  ],
  declarations: [TabsStudentParentPage]
})
export class TabsStudentParentPageModule {}
